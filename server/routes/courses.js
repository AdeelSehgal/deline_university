import express from 'express'
import jwtAutherizationToken from '../middlewares/jwtAutherization.js'
import { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courses.js'
const router = express.Router()

// get all post
router.get('/', getCourses)

// get single post
router.get('/:id', getSingleCourse)

// create course
router.post('/', jwtAutherizationToken, createCourse)

// update course
router.put('/:id', jwtAutherizationToken, updateCourse)

// delete course 
router.delete('/:id', jwtAutherizationToken, deleteCourse)

export default router