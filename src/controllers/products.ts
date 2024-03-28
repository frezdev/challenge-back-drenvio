import { Request, Response } from 'express';
import { Product } from '../models/product';


export class ProductController {
  static async getAll(req: Request, res: Response) {
    try {
      const products = await Product.find({ inStock: true });
      res.status(200).send(products);
    } catch (error) {
      console.log('Error getting all products', error);
    }
  }
}
