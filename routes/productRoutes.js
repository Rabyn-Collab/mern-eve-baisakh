import express from 'express';
import { addProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();


router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(removeProduct);


export default router;
