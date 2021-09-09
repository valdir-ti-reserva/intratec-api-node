import { Router } from 'express'

import { ensureAdmin } from '../../middlewares/ensureAdmin'

import { ListTagsController } from '../../controllers/ListTagsController'
import { CreateTagController } from '../../controllers/CreateTagController'

const tagsRouter = Router()

const listTagsController = new ListTagsController()
const createTagController = new CreateTagController()

tagsRouter.get('/tags', listTagsController.handle)
tagsRouter.post('/tags', ensureAdmin,createTagController.handle)

export { tagsRouter }