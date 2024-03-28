import { Router } from 'express';
import { PriceController } from '../controllers/';

export const priceRouter = Router();

priceRouter.get('/:user_id/:product_name', PriceController.getByUserId);
