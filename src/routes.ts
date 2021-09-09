import { Router } from 'express'

import { routes } from './routes/index'

const router = Router()

router.get('/', (_, res) => {
  return res.send('API ok!')
})

router.use(routes)

export { router }
