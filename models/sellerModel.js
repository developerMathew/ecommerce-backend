const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    image: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" } // 👈 seller reference
});

module.exports = mongoose.model("Products", productSchema);
