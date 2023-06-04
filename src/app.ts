/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
// import bodyParser from 'body-parser'
// import { UserRoutes } from './app/modules/users/user.route'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHanler'
const app: Application = express()

app.use(cors())
//parser
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', UserRoutes)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send('Hello world')
  // Promise.reject(new Error('Unhandled promies rejection'))
  throw new Error('Unhandled promies rejection')
})

//global error hander
app.use(globalErrorHandler)

export default app
