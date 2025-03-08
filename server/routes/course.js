import express from 'express'
import { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse } from '../controllers/course.js'
import jwtAutherizationToken from '../middlewares/jwtAutherization.js'
import userAuthorization from '../middlewares/userAuthorization.js'
import { courseValidation, inputValidation, } from "../middlewares/validateInputs.js";
const router = express.Router()

// get all post
router.get('/', getCourses)

// get single post
router.get('/:id', getSingleCourse)

// create course
router.post('/', courseValidation, inputValidation, jwtAutherizationToken, userAuthorization, createCourse)

// update course
router.put('/:id', courseValidation, inputValidation, jwtAutherizationToken, userAuthorization, updateCourse)

// delete course 
router.delete('/:id', jwtAutherizationToken, userAuthorization, deleteCourse)

export default router