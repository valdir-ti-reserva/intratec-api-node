import { Router } from 'express'

import { CreateComplimentController } from '../../controllers/CreateComplimentsController'
import { ListUserSenderComplimentsController } from '../../controllers/ListUserSenderComplimentsController'
import { ListUserReceiverComplimentsController } from '../../controllers/ListUserReceiverComplimentsController'

const complimentsRouter = Router()

const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()

complimentsRouter.post('/compliments', createComplimentController.handle)
complimentsRouter.get('/users/compliments/send', listUserSendComplimentsController.handle)
complimentsRouter.get('/users/compliments/receive', listUserReceiverComplimentsController.handle)

export { complimentsRouter }