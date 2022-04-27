const express = require("express");

const { register } = require("./../controllers/userControler");

const route = express.Router();
route.get("/register", register);

module.exports = route;
