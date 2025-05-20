const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure products folder exists
const uploadDir = 'products';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage config
let fileIndex = 0;
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const pname = req.body.pname ? req.body.pname.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '') : 'product';
    const ext = path.extname(file.originalname);
    fileIndex += 1;
    cb(null, `${pname}_${fileIndex}_${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// Add product
router.post('/', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
]), async (req, res) => {
  try {
    const { pname, category, price, discount = 0, gst = 0, status, available, type, description, features } = req.body;
    const files = req.files || {};
    const product = new Product({
      pname,
      category,
      price: Number(price),
      discount: Number(discount),
      gst: Number(gst),
      status: Number(status),
      available: Number(available),
      type,
      description,
      features,
      image1: files.image1?.[0]?.filename || null,
      image2: files.image2?.[0]?.filename || null,
      image3: files.image3?.[0]?.filename || null,
      image4: files.image4?.[0]?.filename || null,
    });

    const savedProduct = await product.save();
    res.json({ message: 'Product added successfully', id: savedProduct._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Update product
router.put('/:id', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
]), async (req, res) => {
  try {
    const updates = req.body;
    const files = req.files || {};

    // Convert values
    updates.price = Number(updates.price);
    updates.discount = Number(updates.discount) || 0;
    updates.gst = Number(updates.gst) || 0;
    updates.status = Number(updates.status);
    updates.available = Number(updates.available);

    // Image updates
    if (files.image1) updates.image1 = files.image1[0].filename;
    if (files.image2) updates.image2 = files.image2[0].filename;
    if (files.image3) updates.image3 = files.image3[0].filename;
    if (files.image4) updates.image4 = files.image4[0].filename;

    const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    res.json({ message: 'Product updated successfully', product });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Remove associated image files
    const imageFields = ['image1', 'image2', 'image3', 'image4'];
    imageFields.forEach((field) => {
      if (product[field]) {
        const imagePath = path.join(__dirname, '..', 'products', product[field]);
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
      }
    });

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product and images deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
