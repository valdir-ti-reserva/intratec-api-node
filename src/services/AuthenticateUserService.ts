import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAuthenticateUserRequest {
  email: string;
  password?: string;
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if(!email){
      throw new Error("Incorrect email")
    }

    const user = await usersRepository.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect")
    }
    
    const passwordMatch = await compare(password, user.password)
  
    if(!passwordMatch){       
      throw new Error("Email/Password incorrect")
    }

    const token = sign({
      email: user.email
    }, "3a9405dea514059227605862b34bd19a", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}

export { AuthenticateUserService }