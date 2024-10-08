const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  orderItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItems",
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    type: Schema.Types.ObjectId,
    ref: "addresses",
    required: true,
  },
  paymentDetails: {
    paymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalDiscountPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  discounts: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Pending",
  },
  totalItem: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
