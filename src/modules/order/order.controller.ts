import { NextFunction, Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const productId = order.product;
    const quantity = order.quantity;
    const result = await OrderService.createOrder(order, productId, quantity);
    res.status(200).send({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.getRevenue();
    res.status(200).send({
      message: 'Revenue calculated successfully',
      success: true,
      data: {
        totalRevenue: result
      },
    });
  } catch (error) {
    next(error)
  }
};
export const OrderController = {
  createOrder,
  getRevenue,
};
