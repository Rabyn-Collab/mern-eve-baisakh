import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const port = 5000;
const app = express();


mongoose.connect('mongodb+srv://dbUser:dbuser@cluster0.nxeztd6.mongodb.net/Shop').then((val) => {
  app.listen(port, () => {
    console.log('server is running');
  })
}).catch((err) => {
  console.log(err);
});

app.use(cors({
  origin: ['http://localhost:5173', 'https://mern-eve-baisakh.vercel.app'],
}));

app.use(express.json());
app.use(express.static('uploads'))
app.use(fileUpload({
  // limits: { fileSize: 50 * 1024 * 1024 },
  // abortOnLimit: true
}));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});


app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);





