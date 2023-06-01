import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(user, req.body)
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

export default { createUser }
