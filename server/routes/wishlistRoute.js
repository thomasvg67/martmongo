const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

// GET all wishlist items with product details
router.get('/', async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find()
      .populate('product_id', 'pname price discount gst')
      .sort({ created_at: -1 });

    const response = wishlistItems.map(item => {
      const p = item.product_id;
      return {
        wishlist_id: item._id,
        product_id: p._id,
        pname: p.pname,
        price: p.price,
        discount: p.discount,
        gst: p.gst,
        total: p.price - (p.price * p.discount / 100) + (p.price * p.gst / 100)
      };
    });

    res.json(response);
  } catch (err) {
    console.error('Error fetching wishlist:', err);
    res.status(500).json({ error: 'Failed to fetch wishlist items' });
  }
});

// Add to wishlist
router.post('/', async (req, res) => {
  try {
    const { product_id, user_id } = req.body;

    if (!product_id || !user_id) {
      return res.status(400).json({ error: 'Missing product_id or user_id' });
    }

    // Optional: Check if product exists
    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if already in wishlist to avoid duplicates (optional)
    const existing = await Wishlist.findOne({ product_id, user_id });
    if (existing) {
      return res.status(400).json({ error: 'Product already in wishlist' });
    }

    const wishlistItem = new Wishlist({ product_id, user_id });
    const saved = await wishlistItem.save();

    res.json({ message: 'Added to wishlist', id: saved._id });
  } catch (err) {
    console.error('Error adding to wishlist:', err);
    res.status(500).json({ error: 'Failed to add to wishlist' });
  }
});

module.exports = router;
