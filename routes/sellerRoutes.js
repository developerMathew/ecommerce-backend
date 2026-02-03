const express = require('express');
const { registerSeller, loginSeller } = require('../controllers/sellerController');
const route = express.Router();

route.post('/register', registerSeller)
route.post('/login', loginSeller)