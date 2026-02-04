const express = require("express");
const router = express.Router();
const Product = require("../models/productModel"); // 👈 intha model
const upload = require("../middleware/multer");   // multer + cloudinary config

// ✅ Seller upload product
router.post("/add", upload.single("image"), async (req, res) => {
    try {
        const { name, price, stock, seller } = req.body;

        const product = await Product.create({
            name,
            price,
            stock,
            seller,              // seller ObjectId
            image: req.file.path // cloudinary image URL
        });

        res.json({
            success: true,
            product
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Home page - get all products (with seller info)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("seller", "name email");
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
