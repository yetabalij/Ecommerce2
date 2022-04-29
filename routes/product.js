const express = require("express");
const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("./../controllers/product");

const route = express.Router();
route.post("/products/new", newProduct);
route.get("/products", getProducts);
route.get("/products/:id", getSingleProduct);
route.put("/products/:id", updateProduct);
route.delete("/products/:id", deleteProduct);

module.exports = route;
