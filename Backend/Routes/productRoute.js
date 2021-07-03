const express = require("express");
const router = express.Router();

const { getHomePage, getProducts, get404Page, getSingleProduct } = require("../Controllers/productController");

router.route("/main").get(getHomePage);
router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route('*').get(get404Page);

module.exports = router;