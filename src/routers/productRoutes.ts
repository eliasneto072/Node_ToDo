import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController';

const router = Router();

//router.post('/', createProduct); // Rota para criar um produto
//router.get('/', getProducts); // Rota para obter todos os produtos
//router.get('/:id', getProductById); // Rota para obter um produto por ID
//router.put('/:id', updateProduct); // Rota para atualizar um produto
//router.delete('/:id', deleteProduct); // Rota para deletar um produto

export default router;
