import express from 'express';
import { createOrder, getOrderDetail, getOrders, getUserOrders } from '../controllers/orderController.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';

const router = express.Router();


router.route('/').get(userCheck, adminCheck, getOrders).post(userCheck, createOrder);
router.route('/users').get(userCheck, getUserOrders);
router.route('/:id').get(getOrderDetail);

export default router;