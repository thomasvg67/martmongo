const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  user_id: { type: Number, required: true }, // or String based on your user ID format
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
