import express, { Request, Response } from 'express';
import { Product } from './models/Product'; // Certifique-se que o caminho do modelo está correto
import connectDB from './config/db'; // Importa a função de conexão com o banco de dados

// Inicia a aplicação Express
const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para processar JSON
app.use(express.json());

// Rota para obter todos os produtos
app.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os produtos', error });
  }
});

// Rota para obter um produto por ID
app.get('/products/:id', async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
});

// Rota para criar um novo produto
app.post('/products', async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o produto', error });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
