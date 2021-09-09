import { Router } from 'express'

import { routes } from './routes/index'

import { CreateComplimentController } from './controllers/CreateComplimentsController'

const router = Router()

const createComplimentController = new CreateComplimentController()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.use(routes)

router.post('/compliments', createComplimentController.handle)

export { router }
