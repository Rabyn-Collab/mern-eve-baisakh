import express from 'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const port = 5000;
const app = express();


mongoose.connect('mongodb+srv://dbUser:dbuser@cluster0.nxeztd6.mongodb.net/Shop').then((val) => {
  app.listen(port, () => {
    console.log('server is running');
  })
}).catch((err) => {
  console.log(err);
})


app.use(express.json());
app.use(fileUpload({
  // limits: { fileSize: 50 * 1024 * 1024 },
  // abortOnLimit: true
}));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to backened' });
});


app.use('/products', productRoutes);





