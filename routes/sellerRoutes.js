const express = require('express');
const { registerSeller, loginSeller } = require('../controllers/sellerController');
const route = express.Router();

route.post('/', registerSeller)
route.post('/', loginSeller)