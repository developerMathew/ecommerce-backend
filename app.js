const express = require("express");
const connectDb = require("./config/connectDB");
const cors = require('cors')
const Productroute = require('./routes/productRoutes');
const sellerroute = require('./routes/sellerRoutes');
const Authroute = require('./routes/Authroute');
const orderRoute = require('./routes/orderRoutes')
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// DB connect
connectDb();
app.use(cors())
app.use('/api/products', Productroute)
app.use('/api/orders', orderRoute)
app.use('/api', Authroute)
app.use('/api/seller', sellerroute)

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
