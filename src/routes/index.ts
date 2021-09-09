import { Router } from 'express'
import { usersRouter } from './users'
import { tagsRouter } from './tags'
import { complimentsRouter } from './compliments'

const routes = Router()

routes.use(usersRouter)
routes.use(tagsRouter)
routes.use(complimentsRouter)

export { routes }
