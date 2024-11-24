import { NextFunction, Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = req.body;
    const result = await ProductService.createProduct(product);
    res.status(201).send({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProduct(searchTerm);

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
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const result = await ProductService.getSingleProduct(id);

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
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const result = await ProductService.updateProduct(id, product);

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
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const result = await ProductService.deleteProduct(id);

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
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
