import express from 'express';
import { createOrder, getOrderDetail, getUserOrders } from '../controllers/orderController.js';
import { userCheck } from '../middlewares/authCheck.js';

const router = express.Router();


router.route('/').post(userCheck, createOrder);
router.route('/users').get(userCheck, getUserOrders);
router.route('/:id').get(getOrderDetail);

export default router;