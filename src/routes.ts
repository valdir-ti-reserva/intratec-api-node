import { Router } from 'express'

import { routes } from './routes/index'

import { ensureAdmin } from './middlewares/ensureAdmin'

import { ListTagsController } from './controllers/ListTagsController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateComplimentController } from './controllers/CreateComplimentsController'

const router = Router()

const listTagsController = new ListTagsController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.use(routes)

router.get('/tags', listTagsController.handle)
router.post('/tags', ensureAdmin,createTagController.handle)
router.post('/compliments', createComplimentController.handle)

export { router }
