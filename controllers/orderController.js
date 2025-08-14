import Order from "../models/Order.js"
import Product from "../models/Product.js";



export const getUserOrders = async (req, res) => {
  try {
    if (req.role === 'Admin') {
      const orders = await Order.find({});
      return res.status(200).json(orders);
    } else {
      const orders = await Order.find({ userId: req.userId });
      return res.status(200).json(orders);
    }

  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }

}


export const getOrderDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json({ message: `${err.message}` });
  }

}

export const createOrder = async (req, res) => {
  const { totalAmount, products } = req.body;
  try {

    products.forEach(async (product) => {
      const prod = await Product.findById(product.id);
      prod.stock = prod.stock - product.qty;
      await prod.save();
    });
    await Order.create({
      userId: req.userId,
      totalAmount,
      products
    });
    return res.status(201).json({ message: 'order created Successfully' });
  } catch (err) {
    return res.status(500).json({ message: `${err.message}` });

  }

}