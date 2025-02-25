import express from "express";
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/users.js";
const router = express.Router();

// get all users
router.get("/", getUsers);

// get single user
router.get("/:id", getSingleUser);

// create user
router.post("/", createUser);

// login user
router.post("/login", loginUser);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

export default router;
