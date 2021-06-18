const express = require("express");

const app = express();
const productRouter = require("./Routes/productRoute")

app.use("/api/v1/", productRouter)

module.exports = app;