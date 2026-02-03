const Product = require("../model/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock, image, seller } = req.body;

    if (!seller) {
      return res.status(400).json({ message: "Seller id required" });
    }

    const product = await Product.create({
      name,
      price,
      stock,
      image,
      seller
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
