const mongoose = require("mongoose");
const Category = require("./category.model");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  discountPresent: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  size: [
    {
      name: { type: string },
      quantity: { type: Number },
    },
  ],
  imageUrl: {
    type: String,
  },
  rating: [
    {
      type: { type: mongoose.Schema.Types.ObjectId },
      ref: "rating",
    },
  ],
  rating: [
    {
      type: { type: mongoose.Schema.Types.ObjectId },
      ref: "reviews",
    },
  ],
  numRating: {
    type: Number,
    default: 0,
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
