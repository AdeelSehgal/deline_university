import express from "express";
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/user.js";
import jwtAutherizationToken from '../middlewares/jwtAutherization.js'
import userAuthorization from '../middlewares/userAuthorization.js'
const router = express.Router();

// get all users
router.get("/", jwtAutherizationToken, userAuthorization, getUsers);

// get single user
router.get("/:id", jwtAutherizationToken, userAuthorization, getSingleUser);

// create user
router.post("/", createUser);

// login user
router.post("/login", loginUser);

// update user
router.put("/:id", jwtAutherizationToken, userAuthorization, updateUser);

// delete user
router.delete("/:id", jwtAutherizationToken, userAuthorization, deleteUser);

export default router;
