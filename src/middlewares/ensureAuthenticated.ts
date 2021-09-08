import { Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
  
  const authToken = req.headers.authorization

  if(!authToken) return res.status(401).json({ message: "Token missing" })
  
  const [,token] = authToken.split(" ")
  try {
    const { sub } = verify(token, '3a9405dea514059227605862b34bd19a') as IPayload

    req.user_id = sub

    return next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}
