import { Request, Response } from 'express';
import { User } from '../models/user';


export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      console.log('Error getting all users', error);
    }
  }
}
