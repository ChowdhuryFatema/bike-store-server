"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const productRouter = express_1.default.Router();
productRouter.get('/:id', product_controller_1.ProductController.getSingleProduct);
productRouter.put('/:id', product_controller_1.ProductController.updateProduct);
productRouter.delete('/:id', product_controller_1.ProductController.deleteProduct);
productRouter.get('/', product_controller_1.ProductController.getAllProduct);
productRouter.post('/create-product', product_controller_1.ProductController.createProduct);
exports.default = productRouter;
