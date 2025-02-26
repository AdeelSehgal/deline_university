import db from "../models/index.js";
const { Users } = db;

// get all users
const getUsers = async (req, res) => {
  try {
    const allusers = await Users.findAll();

    if (allusers.length === 0) {
      return res.status(404).json({ message: "users not found" });
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
    const user = await Users.findAll({ where: { id: id } });

    if (user.length === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const { userName, email, password, userType } = req.body;
    if (!userName || !email || !password || !userType) {
      return res.status(404).json({
        message: "userName, email, password and userType is required",
      });
    }

    const createduser = await Users.create({
      userName: userName,
      email: email,
      password: password,
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

    const loginUser = await Users.findAll({
      where: {
        email: email,
        password: password,
      }
    });

    if (loginUser.length === 0) {
      return res.status(404).json({
        message: "invalid email or password",
      });
    }

    res.status(201).json({ message: `user is login`, loginUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update user
const updateUser = async (req, res) => {
  try {
    const { userName, email, password, userType } = req.body;
    const id = req.params.id;
    if (!userName || !email || !password || !userType || !id) {
      return res.status(404).json({
        message: "userName, email, password, id and userType is required",
      });
    }

    const user = await Users.update(
      {
        userName: userName,
        email: email,
        password: password,
        userType: userType,
      },
      {
        where: { id: id },
      }
    );

    if (user == 1) {
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

    if (!id) {
      return res.status(404).json({ message: "id is must" });
    }

    const user = await Users.destroy({ where: { id: id } });

    if (user === 1) {
      return res
        .status(201)
        .json({ message: `user having id ${id} is deleted` });
    }
    res.status(404).json({ message: `user having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, getSingleUser, createUser, updateUser, deleteUser, loginUser };
