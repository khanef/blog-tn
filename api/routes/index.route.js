import express from 'express'
import authRouter from './auth.route.js'
import userRouter from './user.route.js'

const app = express();

function route(app){
    app.use('/api/auth', authRouter)
    app.use('/api/user', userRouter)
}

export default route