import 'reflect-metadata'
import express, { NextFunction, Request, Response} from 'express'
import "express-async-errors"

import { router } from './routes'

import './database'

const app  = express()
const PORT = 3000

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })

})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
