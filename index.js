import express from 'express';
import productRoutes from './routes/productRoutes.js';
const port = 5000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});


app.use('/products', productRoutes);





app.listen(port, () => {
  console.log('server is running');
})