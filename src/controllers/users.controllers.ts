import { Request, Response } from 'express'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'langnv' && password === '123') {
    res.status(201).json({ message: 'login success' })
  }
  res.status(400).json({ message: 'login fail' })
}
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await usersService.register({ email, password })
    res.status(201).json({ message: 'Register success', result })
  } catch (error) {
    res.status(400).json({ message: 'login fail', error })
  }
}
