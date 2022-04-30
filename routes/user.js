const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/user");
const { signUpvalidator } = require("../validator");

router.post("/signup", signUpvalidator, signUp);

module.exports = router;
