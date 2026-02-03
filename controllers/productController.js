const mongoose = require("mongoose");
const Product = require("../models/productModel");

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getallProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json(products);
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
const getSingleProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { createProduct, getallProducts,getSingleProducts };
