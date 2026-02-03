const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("seller", sellerSchema)