import express  from 'express';

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProducts,
  deleteProducts,
  getProductBycategory,
  getNineproduct,
} from '../Controllers/Products.controller.js';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/get/:id', getProductById);
productRouter.put('/:id', updateProducts);
productRouter.delete('/:id', deleteProducts);
productRouter.get('/category/:category', getProductBycategory);
productRouter.get('/random/product', getNineproduct);

export default productRouter; 
