const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pname: { type: String, required: true },
  category: String,
  price: Number,
  discount: Number,
  gst: Number,
  status: Number,
  available: Number,
  type: String,
  description: String,
  features: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
