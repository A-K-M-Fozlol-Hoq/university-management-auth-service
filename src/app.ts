import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import bodyParser from 'body-parser'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())
//parser
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello world')
})

export default app
