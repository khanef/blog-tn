import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createcomment, getpostcomment } from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create',verifyToken, createcomment)
router.get('/getpostcomment/:postId', getpostcomment)

export default router