import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/request/User.requests'

export const loginController = (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const { email, password } = req.body
  if (email === 'langnv' && password === '123') {
    res.status(201).json({ message: 'login success' })
  }
  res.status(400).json({ message: 'login fail' })
}
export const registerController = async (req: Request, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    res.status(201).json({ message: 'Register success', result })
  } catch (error) {
    res.status(400).json({ message: 'login fail', error })
  }
}
