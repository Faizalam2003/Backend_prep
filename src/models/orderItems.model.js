const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderItemsSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },

  size: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const OrderItems = mongoose.model("Order", orderItemsSchema);

module.exports = OrderItems;
