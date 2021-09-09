import { Router } from 'express'

import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated'

import { ListUsersController } from '../../controllers/ListUsersController'
import { CreateUserController } from '../../controllers/CreateUserController'
import { AuthenticateUserController } from '../../controllers/AuthenticateUserController'
import { ListUserSenderComplimentsController } from '../../controllers/ListUserSenderComplimentsController'
import { ListUserReceiverComplimentsController } from '../../controllers/ListUserReceiverComplimentsController'

const usersRouter = Router()

const listUsersController = new ListUsersController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const listUserSendComplimentsController = new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()

usersRouter.post('/users', createUserController.handle)
usersRouter.post('/login', authenticateUserController.handle)

usersRouter.use(ensureAuthenticated)
usersRouter.get('/users', listUsersController.handle)
usersRouter.get('/users/compliments/send', listUserSendComplimentsController.handle)
usersRouter.get('/users/compliments/receive', listUserReceiverComplimentsController.handle)

export { usersRouter }
