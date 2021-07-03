const Product = require("../Models/product");
const dotenv = require('dotenv');
const connectDatabase = require("../Config/database");

const products = require("../Data/product.json");
dotenv.config({path: 'Backend/Config/config.env'});

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log("All products are deleted.")

        await Product.insertMany(products);
        console.log("All products are added.")

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();