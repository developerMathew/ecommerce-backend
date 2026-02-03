const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: String,
    image: String,
    price: Number,
    stockavailable: Number,
    description: String,
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller"
    }
});

module.exports = mongoose.model("sellerProduct", productSchema)