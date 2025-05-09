import express from 'express'
import { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo, getCourseVideos } from '../controllers/video.js'
import jwtAutherizationToken from '../middlewares/jwtAutherization.js'
import userAuthorization from '../middlewares/userAuthorization.js'
import { inputValidation, videosValidation } from "../middlewares/validateInputs.js";
const router = express.Router()

// get all videos
router.get('/', jwtAutherizationToken, getVideos)

// get single video
router.get('/:id', jwtAutherizationToken, getSingleVideo)

// create video
router.post('/', videosValidation, inputValidation, jwtAutherizationToken, userAuthorization, createVideo)

// update video
router.put('/:id', videosValidation, inputValidation, jwtAutherizationToken, userAuthorization, updatevideo)

// delete video
router.delete('/:id', jwtAutherizationToken, userAuthorization, deleteVideo)

// get specific course videos
router.get('/courseVideos/:id', jwtAutherizationToken, getCourseVideos)

export default router