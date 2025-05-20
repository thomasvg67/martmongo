const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./db');

const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
const wishlistRoutes = require('./routes/wishlistRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://martmongo.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.use('/products', express.static(path.join(__dirname, 'products')));

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


// Optional error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
