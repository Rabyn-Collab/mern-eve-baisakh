import Product from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";



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



export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid product id' });

    const product = await Product.findById(id);

    if (!product) return res.status(404).json({ message: 'product not found' });

    product.title = req.body?.title || product.title;
    product.description = req.body?.description || product.description;
    product.stock = req.body?.stock || product.stock;
    product.category = req.body?.category || product.category;
    product.brand = req.body?.brand || product.brand;
    product.price = req.body?.price || product.price;


    if (req.imagePath) {
      fs.unlink(`./uploads/${product.image}`, async (err) => {
        product.image = req.imagePath;
        if (err) return res.status(400).json({ message: `${err}` });
        await product.save();
        return res.status(200).json({ message: 'product updated Successfully' });
      })
    } else {
      await product.save();
      return res.status(200).json({ message: 'product updated Successfully' });
    }

  } catch (err) {
    return res.status(500).json({ message: `${err}` })

  }



}




export const removeProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid product id' });

  const product = await Product.findById(id);

  if (!product) return res.status(404).json({ message: 'product not found' });

  fs.unlink(`./uploads/${product.image}`, async (err) => {
    if (err) return res.status(400).json({ message: `${err}` });

    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'product removed Successfully' });
  })

}
