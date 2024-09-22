import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createcomment, getpostcomment, likeComment } from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create',verifyToken, createcomment)
router.get('/getpostcomment/:postId', getpostcomment)
router.put('/likecomment/:commentId', verifyToken, likeComment)

export default router