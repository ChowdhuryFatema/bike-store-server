"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required.'],
    },
    brand: {
        type: String,
        required: [true, 'Brand name is required.'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required and must be a valid number.'],
        min: [0, 'Price must be a positive number.'],
        validate: {
            validator: (v) => Number.isFinite(v),
            message: 'Price must be a valid number.',
        },
    },
    category: {
        type: String,
        required: [true, 'Category is required.'],
        enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required.'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required and must be a valid number.'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Stock status is required (true/false).'],
    },
}, {
    versionKey: false,
    timestamps: true,
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
