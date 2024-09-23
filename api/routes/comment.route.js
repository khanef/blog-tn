import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createcomment, getpostcomment, likeComment,editComment } from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create',verifyToken, createcomment)
router.get('/getpostcomment/:postId', getpostcomment)
router.put('/likecomment/:commentId', verifyToken, likeComment)
router.put('/editcomment/:commentId', verifyToken, editComment)

export default router