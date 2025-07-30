import Product from "../models/Product.js";
import fs from 'fs';



export const getProducts = async (req, res) => {

  try {
    const products = await Product.find({});
    return res.status(200).json({
      products
    })

  } catch (err) {
    return res.status(500).json({ err: `${err}` })
  }
}



export const getProduct = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ message: 'product' });
}


export const addProduct = async (req, res) => {
  const { title, description, stock, category, brand, price } = req.body;
  try {
    await Product.create({
      title,
      description,
      stock,
      image: req.imagePath,
      category,
      brand,
      price
    });
    return res.status(200).json({ message: 'product added Successfully' });
  } catch (error) {
    fs.unlink(`./uploads/${req.imagePath}`, (err) => {
      if (err) console.log(err);
      return res.status(500).json({ err: `${error}` })
    })

  }
}



export const updateProduct = (req, res) => {

}




export const removeProduct = (req, res) => {

}
