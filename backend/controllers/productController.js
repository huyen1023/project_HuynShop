const Product = require("../models/productModel");

const exception = (e) => {
  return {
    error: "An error occurred!",
    data: e,
  };
};

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      res
        .status(200)
        .json({ message: "Get all data successfully!", data: products });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json({ message: "Get data successfully", data: product });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getByType: async (req, res) => {
    try {
      const { type } = req.query;
      const products = await Product.find({ type: type });
      res.status(200).json({ message: "Get data success!", data: products });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getBySale: async (req, res) => {
    try {
      const products = await Product.find({ sale: true });
      res.status(200).json({ message: "Get data success", data: products });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  post: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const product = await newProduct.save();
      res
        .status(201)
        .json({ message: "Create product successful!", data: product });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  put: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Update product successfully", data: "" });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  delete: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ message: "Delete product successfully", data: "" });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  search: async (req, res) => {
    try {
      const res = await Product.find({ category: req.body.category });
      res.status(200).json({ message: "Search success", data: res });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },
};

module.exports = productController;
