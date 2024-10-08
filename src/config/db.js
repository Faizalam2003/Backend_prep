const mongoose = require("mongoose");
const mongoDbUrl =
  "mongodb+srv://faizjawed2:oKwAXWxYISxtdvZQ@cluster0.0twc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
