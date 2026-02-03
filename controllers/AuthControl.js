const mongoose = require('mongoose');
const userModel = require('../models/AuthModel');

const registerUser = async (req, res) => {
    console.log(req.body); // debug
    try {
        const user = await userModel.create(req.body); // ✅ correct model
        res.status(201).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1️⃣ find user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // 2️⃣ check password (plain text, simple logic)
        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // 3️⃣ success
        res.status(200).json({
            success: true,
            message: "Login successful",
            user
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { registerUser, loginUser };
