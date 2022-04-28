const express = require("express");

const { newProduct } = require("./../controllers/productControllers");

const route = express.Router();
route.post("/product/new", newProduct);

module.exports = route;
