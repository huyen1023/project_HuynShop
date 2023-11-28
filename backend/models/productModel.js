const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: [String],
    name: String,
    price: Number, 
    des: String,
    category: String,
    type: String,
    trademark: String,
    color: [String],
    size: [String],
    style: String,
    origin: String,
    inventory: Number,
    sold: {
      type: Number,
      default: 0
    },
    sale: {
      type: Boolean,
      default: false,
    },
    percent: Number,
    minSuitableAge: Number,
    maxSuitableAge: Number,
    suitableGender: Boolean,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
