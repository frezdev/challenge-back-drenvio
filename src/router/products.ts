import { Router } from 'express';
import { ProductController } from '../controllers/products';

export const productsRouter = Router();

productsRouter.get('/', ProductController.getAll);