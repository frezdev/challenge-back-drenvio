import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  id: Number,
  nombre: String,
  metadata: {
    precios_especiales: Array
  }
});

export const User = model('User', UserSchema);
