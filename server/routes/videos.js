import express from 'express'
import { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courses.js'
const router = express.Router()

// get all videos
router.get('/', getCourses)

// get single video
router.get('/:id', getSingleCourse)

// create video
router.post('/', createCourse)

// update video
router.put('/:id', updateCourse)

// delete video
router.delete('/:id', deleteCourse)

export default router