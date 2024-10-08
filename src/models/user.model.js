const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { default: payments } = require("razorpay/dist/types/payments");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Please enter a valid email address.",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    required: true,
    default: "CUSTOMER",
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (mobile) {
        return /^\+?[0-9]{1,15}$/.test(mobile);
      },
      message: "Please enter a valid mobile number.",
    },
  },

  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
    },
  ],
  paymentInfomation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "paymentInformation",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
