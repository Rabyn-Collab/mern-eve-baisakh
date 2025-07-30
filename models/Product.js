import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

  title: {
    type: String,
    // unique: true,
    //  min: [20, 'Must be at least 20, got {VALUE}'],
    //  max: [50, ''],
    required: true
  },

  description: {
    type: String,
    required: true
  },

  stock: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    enum: ['men\'s clothing', 'women\'s clothing', 'electronics', 'beauty'],
    required: true
  },

  brand: {
    type: String,
    enum: ['nike', 'addidas', 'samsung', 'iphone', 'gucci', 'sunsilk', 'himalayan'],
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }


}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);


export default Product;