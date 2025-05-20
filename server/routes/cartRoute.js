const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get all cart items with product details
router.get('/', async (req, res) => {
  try {
    // Populate product details
    const cartItems = await Cart.find()
      .populate('product_id', 'pname price discount gst')
      .sort({ created_at: -1 });

    // Format response to match your original structure
    const response = cartItems.map(item => ({
      cart_id: item._id,
      product_id: item.product_id._id,
      quantity: item.quantity,
      pname: item.product_id.pname,
      price: item.product_id.price,
      discount: item.product_id.discount,
      gst: item.product_id.gst
    }));

    res.json(response);
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

// Add to cart
router.post('/', async (req, res) => {
  try {
    let { product_id, quantity } = req.body;
    const user_id = 1000; // dummy static user ID

    quantity = Number(quantity) || 1;
    if (!product_id || quantity < 1) {
      return res.status(400).json({ error: 'Invalid product_id or quantity' });
    }

    // Optional: Check if product exists
    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Create new cart item
    const cartItem = new Cart({
      user_id,
      product_id,
      quantity
    });

    const savedItem = await cartItem.save();
    res.json({ message: 'Cart item added', id: savedItem._id });
  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ error: 'Failed to add cart item' });
  }
});

// Update cart item quantity by cart_id
router.put('/:id', async (req, res) => {
  try {
    const cartId = req.params.id;
    const quantity = Number(req.body.quantity);

    if (!cartId || !quantity || quantity < 1) {
      return res.status(400).json({ error: 'Invalid cart ID or quantity' });
    }

    const updated = await Cart.findByIdAndUpdate(cartId, { quantity }, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Cart updated successfully' });
  } catch (err) {
    console.error('Error updating cart:', err);
    res.status(500).json({ error: 'Failed to update cart' });
  }
});

// Delete cart item by cart_id
router.delete('/:id', async (req, res) => {
  try {
    const cartId = req.params.id;
    if (!cartId) {
      return res.status(400).json({ error: 'Invalid cart ID' });
    }

    const deleted = await Cart.findByIdAndDelete(cartId);
    if (!deleted) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Cart item deleted successfully' });
  } catch (err) {
    console.error('Error deleting cart item:', err);
    res.status(500).json({ error: 'Failed to delete cart item' });
  }
});

module.exports = router;
