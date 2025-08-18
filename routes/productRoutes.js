import express from 'express';
import { addProduct, getProduct, getProducts, getTop5Products, removeProduct, updateProduct } from '../controllers/productController.js';
import { checkFile, updateCheckFile } from '../middlewares/checkFile.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { productSchema, validate } from '../utils/validators.js';

const router = express.Router();


router.route('/').get(getProducts).post(userCheck, adminCheck,
  validate.body(productSchema), checkFile, addProduct);
router.route('/top-5').get(getTop5Products);
router.route('/:id').get(getProduct).patch(userCheck, adminCheck, updateCheckFile, updateProduct).delete(userCheck, adminCheck, removeProduct);


export default router;
