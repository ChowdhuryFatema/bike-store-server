"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./modules/product/product.route"));
const errorHandler_1 = __importDefault(require("./errorHandler"));
const order_route_1 = __importDefault(require("./modules/order/order.route"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', product_route_1.default);
app.use('/api/orders', order_route_1.default);
// middleware
app.use(errorHandler_1.default);
app.get('/', (req, res) => {
    res.send('Server is running');
});
exports.default = app;
