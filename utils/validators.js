import Joi from "joi"
import joivalidate from 'express-joi-validation';


export const validate = joivalidate.createValidator({});


export const productSchema = Joi.object({
  title: Joi.string().min(10).max(100).required(),
  description: Joi.string().min(10).required(),
  stock: Joi.number().required(),

  category: Joi.string().valid('men\'s clothing', 'women\'s clothing', 'electronics', 'beauty').required(),

  brand: Joi.string().valid('nike', 'addidas', 'samsung', 'iphone', 'gucci', 'sunsilk', 'himalayan').required(),
  price: Joi.number().required(),


});

export const registerSchema = Joi.object({
  username: Joi.string().min(5).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});


export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
})