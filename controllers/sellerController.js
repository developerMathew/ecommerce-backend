const mongoose = require('mongoose');
const userModel = require('../models/sellerModel');

const registerSeller = async (req, res) => {
    console.log(req.body);
    try {
        const seller = await userModel.create(req.body);
        res.status(201).json({ success: true, seller });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const loginSeller = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Seller not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { registerSeller, loginSeller };
