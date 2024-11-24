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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.ProductService.createProduct(product);
        res.status(201).send({
            message: 'Bike created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductService.getAllProduct(searchTerm);
        // Check if the result is empty or not found
        if (!result || result.length === 0) {
            res.status(404).send({
                message: 'No products found for the provided search term',
                success: false,
                data: {},
            });
        }
        // If data is found, return it
        res.status(200).send({
            message: 'Bikes retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.ProductService.getSingleProduct(id);
        if (!result) {
            res.status(404).json({
                message: 'Bike not found',
                success: false,
                data: {},
            });
        }
        res.status(200).send({
            message: 'Bike retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = yield product_service_1.ProductService.updateProduct(id, product);
        if (!result) {
            res.status(404).json({
                message: 'Bike not found',
                success: false,
            });
        }
        res.status(200).send({
            message: 'Bike updated successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.ProductService.deleteProduct(id);
        if (!result) {
            res.status(404).json({
                message: 'Bike not found',
                success: false,
            });
        }
        res.status(200).send({
            message: 'Bike deleted successfully',
            success: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
