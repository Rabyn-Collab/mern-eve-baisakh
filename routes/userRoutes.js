import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { loginSchema, registerSchema, validate } from '../utils/validators.js';


const router = express.Router();

router.route('/login').post(validate.body(loginSchema), loginUser);
router.route('/register').post(validate.body(registerSchema), registerUser);



export default router;
