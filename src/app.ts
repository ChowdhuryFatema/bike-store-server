import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/product/product.route';
import errorHandler from './errorHandler';
import orderRouter from './modules/order/order.route';

const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// middleware
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

export default app;
