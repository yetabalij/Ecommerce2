const express = require("express");
const { newProduct } = require("./../controllers/product");

const route = express.Router();
route.get("/products/new", newProduct);

module.exports = route;
