const express = require("express");
const router = express.Router();
const { createProduct, getallProducts, getSingleProducts } = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getallProducts);
router.get("/:id", getSingleProducts);

module.exports = router;
