"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (payload, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch the product from the database
    const orderedProduct = yield product_model_1.default.findById(productId);
    // Check if the product exists
    if (!orderedProduct) {
        throw new Error('Product not found');
    }
    // Check if there is enough stock for the order
    if (orderedProduct.quantity < quantity) {
        throw new Error(`Insufficient stock. Available quantity: ${orderedProduct.quantity}`);
    }
    // Create the order
    const result = yield order_model_1.default.create(payload);
    // Reduce the product quantity and update inStock status
    orderedProduct.quantity -= quantity;
    if (orderedProduct.quantity === 0) {
        orderedProduct.inStock = false;
    }
    yield orderedProduct.save();
    return result;
});
const getRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return result ? result.totalRevenue : 0;
});
exports.OrderService = {
    createOrder,
    getRevenue,
};
