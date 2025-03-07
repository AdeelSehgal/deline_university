import express from 'express'
import { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo, getCourseVideos } from '../controllers/video.js'
import jwtAutherizationToken from '../middlewares/jwtAutherization.js'
import userAuthorization from '../middlewares/userAuthorization.js'
const router = express.Router()

// get all videos
router.get('/', jwtAutherizationToken, getVideos)

// get single video
router.get('/:id', jwtAutherizationToken, getSingleVideo)

// create video
router.post('/', jwtAutherizationToken, userAuthorization, createVideo)

// update video
router.put('/:id', jwtAutherizationToken, userAuthorization, updatevideo)

// delete video
router.delete('/:id', jwtAutherizationToken, userAuthorization, deleteVideo)

// get specific course videos
router.get('/courseVideos/:id', jwtAutherizationToken, getCourseVideos)

export default router