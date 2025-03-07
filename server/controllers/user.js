import db from "../models/index.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const { users } = db;


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
    if (!user_name || !email || !password || !userType) {
      return res.status(404).json({
        message: "user_name, email, password and userType is required",
      });
    }

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
    if (!email || !password) {
      return res.status(404).json({
        message: "email and password is required",
      });
    }

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

    const token = jwt.sign(userObject, process.env.SECRET_KEY, { expiresIn: '1440m' })
    res.status(200).json({ message: `user is login`, token: token, userType: userType });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update user
const updateUser = async (req, res) => {
  try {
    const { user_name, email, password, userType } = req.body;
    const id = req.params.id;
    if (!user_name || !email || !password || !userType || !id) {
      return res.status(404).json({
        message: "user_name, email, password, id and userType is required",
      });
    }

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

export { getUsers, getSingleUser, createUser, updateUser, deleteUser, loginUser };
