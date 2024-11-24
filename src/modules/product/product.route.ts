import express from 'express';
import { ProductController } from './product.controller';

const productRouter = express.Router();

productRouter.get('/:id', ProductController.getSingleProduct);
productRouter.put('/:id', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);
productRouter.get('/', ProductController.getAllProduct);
productRouter.post('/create-product', ProductController.createProduct);

export default productRouter;
