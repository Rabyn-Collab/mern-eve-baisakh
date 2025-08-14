import express from 'express';
import { loginUser, registerUser, updateUser } from '../controllers/userController.js';
import { loginSchema, registerSchema, validate } from '../utils/validators.js';
import { userCheck } from '../middlewares/authCheck.js';


const router = express.Router();

router.route('/login').post(validate.body(loginSchema), loginUser);
router.route('/register').post(validate.body(registerSchema), registerUser);
router.route('/update').patch(userCheck, updateUser);



export default router;
