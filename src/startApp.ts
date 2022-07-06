import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { authHandler, errorHandler } from './middlewares'
import { AppRouter, envs } from './utils'
import './controllers/routes'

const { port } = envs

export const startApp = () => {
    const app = express()

    app.use(cors())
    app.use(bodyParser.json())
    app.use(morgan('combined'))

    app.use(AppRouter.getInstance())

    app.use(errorHandler)

    app.listen(port, '0.0.0.0', () => {
        console.info(`Note Service listening on port ${port}`)
    })
}
