const express = require("express");
const { model } = require("mongoose");

const router = express.Router();
const {getProducts} = require("../Controllers/productController")

router.route('/products').get(getProducts)

module.exports = router;