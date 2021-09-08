import {Request, Response} from 'express'
import { ListReceiverComplimentByUserService } from '../services/ListReceiverComplimentByUserService'

class ListUserReceiverComplimentsController {

  async handle(req: Request, res: Response){
    
    const { user_id } = req

    const listReceiverComplimentsService = new ListReceiverComplimentByUserService()

    const compliments = await listReceiverComplimentsService.execute(user_id)

    return res.status(200).json(compliments)
  }

}

export { ListUserReceiverComplimentsController }
