import { getCustomRepository } from 'typeorm'

import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListSenderComplimentByUserService {

  async execute(user_id: string)
  {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepository.find({ 
      where: {
        user_sender: user_id,
      },
      relations: [
        "userSender",
        "userReceiver",
        "tag",
      ]
    })

    return compliments
  }
}

export { ListSenderComplimentByUserService }