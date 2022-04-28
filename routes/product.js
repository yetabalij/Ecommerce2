const express = require("express");
const {
  newProduct,
  getProducts,
  getSingleProduct,
} = require("./../controllers/product");

const route = express.Router();
route.post("/products/new", newProduct);
route.get("/products", getProducts);
route.get("/products/:id", getSingleProduct);

module.exports = route;
