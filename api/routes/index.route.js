import express from 'express'
import authRouter from './auth.route.js'
import userRouter from './user.route.js'
import postRouter from './post.route.js'

const app = express();

function route(app){
    app.use('/api/auth', authRouter)
    app.use('/api/user', userRouter)
    app.use('/api/post', postRouter)
}

export default route