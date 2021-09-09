import { Router } from 'express'
import { usersRouter } from './users'

const routes = Router()

routes.use(usersRouter)

export { routes }
