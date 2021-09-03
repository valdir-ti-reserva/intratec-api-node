import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password?: string;
}

class CreateUserService {

  async execute({name, email, password, admin}: IUserRequest)
  {
    const usersRepository = getCustomRepository(UsersRepositories)

    if(!email){
      throw new Error("Incorrect email")
    }

    const alreadyExists = await usersRepository.findOne({
      email
    });

    if(alreadyExists){
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name, 
      email, 
      password: passwordHash,
      admin
    });

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }