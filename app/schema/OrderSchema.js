const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
  productId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  totalprice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
});

module.exports = orderSchema;
