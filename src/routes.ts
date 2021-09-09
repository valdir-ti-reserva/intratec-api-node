import { Router } from 'express'

import { routes } from './routes/index'

const router = Router()

router.get('/', (_, res) => {
  return res.status(200).json({message: 'API ok!'})
})

router.use(routes)

export { router }
