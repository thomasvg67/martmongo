const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user_id: { type: Number, required: true }, // or String if you store user IDs differently
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
