import { Router } from 'express'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'

import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.use(ensureAdmin)
router.post('/tags', createTagController.handle) 

export { router }
