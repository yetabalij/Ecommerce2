const express = require("express");
const { newProduct, getProducts } = require("./../controllers/product");

const route = express.Router();
route.post("/products/new", newProduct);
route.get("/products", getProducts);

module.exports = route;
