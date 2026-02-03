const Order = require("../models/orderModel");


const createOrder = async (req, res) => {
    try {
        const { user, products, totalAmount, address, paymentMethod } = req.body;

        const order = await Order.create({
            user,
            products,
            totalAmount,
            address,
            paymentMethod
        });

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user", "name email");

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId });

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { createOrder, getAllOrders, getUserOrders };
