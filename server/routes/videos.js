import express from 'express'
import { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo } from '../controllers/videos.js'
const router = express.Router()

// get all videos
router.get('/', getVideos)

// get single video
router.get('/:id', getSingleVideo)

// create video
router.post('/', createVideo)

// update video
router.put('/:id', updatevideo)

// delete video
router.delete('/:id', deleteVideo)

export default router