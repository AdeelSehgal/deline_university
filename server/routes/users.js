import express from 'express'
import { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courses.js'
const router = express.Router()

// get all users
router.get('/', getCourses)

// get single user
router.get('/:id', getSingleCourse)
user
// create user
router.post('/', createCourse)

// update user
router.put('/:id', updateCourse)

// delete user 
router.delete('/:id', deleteCourse)

export default router