import db from "../models/index.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { users, tokens } = db;


// get all users
const getUsers = async (req, res) => {
  try {
    const allusers = await users.findAll();
    if (allusers.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }

    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single user
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await users.findAll({ where: { id: id } });

    if (singleUser.length === 0) {
      return res.status(404).json({ message: `user having id ${id} not found` });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const { user_name, email, password, userType } = req.body;

    // the larget the number the stronger the password but take long time as number increase
    const hashPassword = await bcrypt.hash(password, 10)
    const createduser = await users.create({
      user_name: user_name,
      email: email,
      password: hashPassword,
      userType: userType,
    });
    res.status(201).json({ message: `user is created`, createduser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await users.findAll({
      where: {
        email: email,
      }
    });

    if (loginUser.length === 0) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }

    const isMatch = await bcrypt.compare(password, loginUser[0].dataValues.password)

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const userType = loginUser[0].dataValues.userType
    const userObject = {
      email: email,
      password: password
    }

    const token = generateAccessToken(userObject)
    const refreshToken = jwt.sign(userObject, process.env.REFRESH_TOKEN_SECRET)

    await tokens.create({
      refreshToken: refreshToken
    })

    return res.status(200).json({ message: `user is login`, token: token, userType: userType, refreshToken: refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// this code will geberate access token for us
const generateAccessToken = (userObject) => {
  return jwt.sign(userObject, process.env.SECRET_KEY, { expiresIn: '60m' })
}

// refresh token
const refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken

  if (refreshToken === null || refreshToken === '') {
    return res.status(400).json({ message: `refesh token s required`, });
  }

  const isRefreshToken = await tokens.findOne({ where: { refreshToken: refreshToken } })

  if (!isRefreshToken) {
    return res.status(403).json({ message: 'Unauthenticated' })
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthenticated.' })
    }
    const token = generateAccessToken({ email: user.email, password: user.password })
    return res.status(200).json({ message: `user is login`, token: token, });
  })
}


const logoutUser = async (req, res) => {
  const refreshToken = req.body.refreshToken

  if (refreshToken === null || refreshToken === '') {
    return res.status(400).json({ message: `refesh token s required`, });
  }

  const deleteRefreshToken = await tokens.destroy({ where: { refreshToken: refreshToken } })

  if (deleteRefreshToken === 0) {
    res.status(404).json({ message: `refresh token is not present` });
  }

  return res.status(200).json({ message: "user is logout" })

}


// update user
const updateUser = async (req, res) => {
  try {
    const { user_name, email, password, userType } = req.body;
    const id = req.params.id;

    const updatedUser = await users.update(
      {
        user_name: user_name,
        email: email,
        password: password,
        userType: userType,
      },
      {
        where: { id: id },
      }
    );

    if (updatedUser == 1) {
      return res
        .status(201)
        .json({ message: `user having id ${id} is updated` });
    }
    res.status(404).json({ message: `user having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await users.destroy({ where: { id: id } });

    if (deleteUser === 1) {
      return res
        .status(200)
        .json({ message: `user having id ${id} is deleted` });
    }
    res.status(404).json({ message: `user having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, getSingleUser, createUser, updateUser, deleteUser, loginUser, refreshToken, logoutUser };
