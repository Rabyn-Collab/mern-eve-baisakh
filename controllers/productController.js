import Product, { brands, categories } from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";


export const getTop5Products = async (req, res) => {
  try {
    const products = await Product.find({ rating: { $gt: 4 } }).limit(5);

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }
}

export const getProducts = async (req, res) => {
  const queryObject = { ...req.query };

  const excludedFields = ['search', 'sort', 'page', 'fields', 'limit', 'skip'];

  excludedFields.forEach((feild) => {
    delete queryObject[feild];
  });



  try {

    // search
    if (req.query.search) {
      const searchText = req.query.search;
      if (brands.includes(searchText)) {
        queryObject.brand = { $regex: searchText, $options: 'i' }
      } else if (categories.includes(searchText)) {
        queryObject.category = { $regex: searchText, $options: 'i' }
      } else {
        queryObject.title = { $regex: searchText, $options: 'i' };
      }

    }

    //eq|gt|gte
    const output = Object.entries(queryObject).reduce((acc, [key, value]) => {
      const match = key.match(/(.*?)\[(.*?)\]/);
      if (match) {
        const field = match[1];
        const operator = `$${match[2]}`;
        const parsedValue = isNaN(value) ? value : Number(value);

        acc[field] = { [operator]: parsedValue };
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});


    const query = Product.find(output);

    //sort
    if (req.query.sort) {
      const sorting = req.query.sort.split(/[\s,]+/).filter(Boolean).join(' ');
      query.sort(sorting);
    }

    //selects
    if (req.query.fields) {
      const fields = req.query.fields.split(/[\s,]+/).filter(Boolean).join(' ');
      query.select(fields);
    }

    //pagination
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * 10;

    const total = await Product.countDocuments();
    const products = await query.skip(skip).limit(limit);

    return res.status(200).json({
      products,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (err) {
    return res.status(500).json({ message: `${err}` })
  }
}



export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ message: `${error}` })
  }
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
      return res.status(500).json({ message: `${error}` })
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
