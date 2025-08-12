import Order from "../models/Order.js"



export const getOrders = async (req, res) => {

  try {
    const orders = await Order.find({});
    return res.status(200).json(orders)
  } catch (err) {
    return res.status(500).json({ message: `${err}` })
  }

}

export const getUserOrders = async (req, res) => {

}


export const getOrderDetail = async (req, res) => {

}

export const createOrder = async (req, res) => {
  const { totalAmount, products } = req.body;
  try {
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