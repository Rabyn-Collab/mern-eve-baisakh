import express from 'express';
import { addProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/productController.js';
import { checkFile, updateCheckFile } from '../middlewares/checkFile.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';

const router = express.Router();


router.route('/').get(getProducts).post(userCheck, adminCheck, checkFile, addProduct);
router.route('/:id').get(getProduct).patch(userCheck, adminCheck, updateCheckFile, updateProduct).delete(userCheck, adminCheck, removeProduct);


export default router;
