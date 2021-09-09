import { Router } from 'express'

import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated'

import { ListUsersController } from '../../controllers/ListUsersController'
import { CreateUserController } from '../../controllers/CreateUserController'
import { AuthenticateUserController } from '../../controllers/AuthenticateUserController'

const usersRouter = Router()

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

usersRouter.post('/users', createUserController.handle)
usersRouter.post('/login', authenticateUserController.handle)

usersRouter.use(ensureAuthenticated)
usersRouter.get('/users', listUsersController.handle)

export { usersRouter }
