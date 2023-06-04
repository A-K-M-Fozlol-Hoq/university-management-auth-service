/* eslint-disable no-unused-vars */
import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

let server: Server

process.on('uncaughtException', err => {
  console.log('Uncaught exception is detected...')
  // errorLogger.error(err)
  errorLogger.error('Uncaught exception is detected.')
  process.exit(1)
})
// console.log(sdfh)
process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connection established')

    server = app.listen(config.port, () => {
      logger.info('app is listening on port ' + config.port)
    })
  } catch (err) {
    errorLogger.error('Failed to connect to MongoDB')
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection, we are closing out server', error)
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()
