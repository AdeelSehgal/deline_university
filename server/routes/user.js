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
import { userResgisterValidation, inputValidation, userLoginValidation } from "../middlewares/validateInputs.js";
const router = express.Router();

// get all users
router.get("/", jwtAutherizationToken, userAuthorization, getUsers);

// get single user
router.get("/:id", jwtAutherizationToken, userAuthorization, getSingleUser);

// create user  // for validation the order is matter first rules and then function
router.post("/", userResgisterValidation, inputValidation, createUser,);

// login user
router.post("/login", userLoginValidation, inputValidation, loginUser);

// update user
router.put("/:id", userResgisterValidation, inputValidation, jwtAutherizationToken, userAuthorization, updateUser);

// delete user
router.delete("/:id", jwtAutherizationToken, userAuthorization, deleteUser);

export default router;
