import dotenv from 'dotenv';
import 'reflect-metadata'
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import express, { NextFunction, Request, Response} from 'express'

import { router } from './routes'

import './database'

import swaggerDocs from './swagger.json'

dotenv.config()

const app  = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
