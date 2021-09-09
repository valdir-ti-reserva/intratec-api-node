import { Router } from 'express'
import { usersRouter } from './users'
import { tagsRouter } from './tags'

const routes = Router()

routes.use(usersRouter)
routes.use(tagsRouter)

export { routes }
