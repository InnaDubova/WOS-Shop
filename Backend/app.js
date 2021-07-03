const express = require("express");

const errorMiddleware = require("./Middleware/errors");

const app = express();
const productRouter = require("./Routes/productRoute")

app.use("/api/v1/", productRouter)

app.use(errorMiddleware);

module.exports = app;