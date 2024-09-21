import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createcomment } from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create',verifyToken, createcomment)

export default router