import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  products: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      qty: { type: Number, required: true },
      stock: { type: Number, required: true }
    }
  ]

}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;