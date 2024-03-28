import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  inStock: Boolean,
  basePrice: Number,
  brand: String,
});

export const Product = model('Product', ProductSchema);