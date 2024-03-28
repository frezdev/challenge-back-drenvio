import { Router } from 'express';
import { UserController } from '../controllers/users';

export const userController = Router();

userController.get('/', UserController.getAll);