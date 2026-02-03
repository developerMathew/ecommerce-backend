const express = require("express");
const connectDb = require("./config/connectDB");
const Productroute = require('./routes/productRoutes');
const Authroute = require('./routes/Authroute');
const orderRoute = require('./routes/orderRoutes')
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// DB connect
connectDb();

app.use('/api/products', Productroute)
app.use('/api/orders', orderRoute)
app.use('/api', Authroute)

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
