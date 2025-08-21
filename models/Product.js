import mongoose from "mongoose";

export const brands = ['nike', 'addidas', 'samsung', 'iphone', 'gucci', 'sunsilk', 'himalayan', 'Zara'];
export const categories = ['men\'s clothing', 'women\'s clothing', 'electronics', 'beauty'];
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
    enum: categories,
    required: true
  },

  brand: {
    type: String,
    enum: brands,
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
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ]


}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);


export default Product;