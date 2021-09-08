import { Router } from 'express'

import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentsController'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()
const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.use(ensureAuthenticated)
router.get('/users', listUsersController.handle)
router.get('/tags', listTagsController.handle) 
router.post('/tags', ensureAdmin,createTagController.handle) 
router.post('/compliments', createComplimentController.handle)
router.get('/users/compliments/send', listUserSendComplimentsController.handle) 
router.get('/users/compliments/receive', listUserReceiverComplimentsController.handle) 

export { router }
