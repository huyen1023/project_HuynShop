const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    fullname: String,
    address: [
      {
        name: String,
        phonenumber: String,
        specificaddress: String,
        ward: String,
        district: String,
        city: String,
        // main: {
        //   type: Boolean,
        //   default: false
        // }
      }, 
    ],
    phonenumber: String,
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dz2fcqjpg/image/upload/v1695374699/mejug1pxuu1pkdrwbvro.jpg",
    },
    gender: {
      type: Boolean,
      default: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    carts: [],
    orders: [
      {
        type: String,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
