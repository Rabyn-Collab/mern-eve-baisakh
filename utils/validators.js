import Joi from "joi"
import joivalidate from 'express-joi-validation';


export const validate = joivalidate.createValidator({});


export const registerSchema = Joi.object({
  username: Joi.string().min(5).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});


export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
})