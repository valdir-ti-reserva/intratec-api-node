import {Request, Response} from 'express'
import { ListTagsService } from '../services/ListTagsService'

class ListTagsController {

  async handle(req: Request, res: Response){
    
    const listTagsService = new ListTagsService()

    let tags = await listTagsService.execute()

    return res.status(200).json(tags)
  }

}

export { ListTagsController }
