const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        product: {
          type: String,
          ref: "Product",
        },
        quantity: Number,
        color: String,
        size: String 
      },
    ],
    subtotal: Number,
    customer: {
      type: String,
      ref: "User",
    },
    shippingaddress: {
      name: String,
      phonenumber: String,
      specificaddress: String,
      ward: String,
      district: String,
      city: String
    },
    status: {
      type: String,
      default: "00"
    }, // 00 - don hang cho xu ly || 10 - khach hang huy don || 01 - admin huy don hang || 11 - admin xac nhan don hang 
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
