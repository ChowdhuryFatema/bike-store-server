
import { IProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProduct = async (searchTerm: any) => {
  let filter = {};
  if (searchTerm) {
    filter = {
      $or: [
        { name: new RegExp(searchTerm, 'i') },
        { brand: new RegExp(searchTerm, 'i') },
        { category: new RegExp(searchTerm, 'i') },
      ],
    };
  }
  const result = await Product.find(filter);
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProduct = async (id: string, payload: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
