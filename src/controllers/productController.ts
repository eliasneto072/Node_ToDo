// src/controllers/productController.ts
import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

// Criar um novo produto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar produto', error });
  }
};

// Obter todos os produtos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produtos', error });
  }
};

// Obter um produto por ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produto', error });
  }
};

// Atualizar um produto
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Deletar um produto
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};
