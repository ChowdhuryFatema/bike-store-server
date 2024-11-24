import express from 'express';
import { OrderController } from './order.controller';

const orderRouter = express.Router();

orderRouter.post('/create-order', OrderController.createOrder);
orderRouter.get('/revenue', OrderController.getRevenue);

export default orderRouter;
