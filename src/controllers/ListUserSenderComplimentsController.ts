import {Request, Response} from 'express'
import { ListSenderComplimentByUserService } from '../services/ListSenderComplimentByUserService'

class ListUserSenderComplimentsController {

  async handle(req: Request, res: Response){
    
    const { user_id } = req

    const listUserSenderComplimentsService = new ListSenderComplimentByUserService()

    const compliments = await listUserSenderComplimentsService.execute(user_id)

    return res.status(200).json(compliments)
  }

}

export { ListUserSenderComplimentsController }
