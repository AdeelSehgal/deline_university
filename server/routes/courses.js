import express from 'express'
import { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courses.js'
const router = express.Router()

// get all post
router.get('/', getCourses)

// get single post
router.get('/:id', getSingleCourse)

// create course
router.post('/', createCourse)

// update course
router.put('/:id', updateCourse)

// delete course 
router.delete('/:id', deleteCourse)

export default router