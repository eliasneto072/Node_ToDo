// src/models/Product.ts
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now   

  }
});

export const Product = model('Product', productSchema);