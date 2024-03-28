import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { Product, User } from '../models/';


export class PriceController {
  static async getByUserId(req: Request, res: Response) {
    const { user_id, product_name } = req.params;
    try {

      if (!isValidObjectId(user_id)) throw new Error('Invalid user ID');

      const user = await User.findById(user_id);
      const product = await Product.findOne({ name: product_name });

      if (!product) return res.status(404).json({ error: 'Product not found' });
      if (!user?.metadata) return res.status(200).send({ basePrice: product.basePrice });

      const { precios_especiales } = user.metadata;

      const productWithSpecialPrice = precios_especiales.find((item) => {
        console.log({ item, product });
        return item.nombre_producto === product.name;
      });

      if (productWithSpecialPrice) {
        res.status(200).send({
          specialPrice: productWithSpecialPrice.precio_especial_personal
        });
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
