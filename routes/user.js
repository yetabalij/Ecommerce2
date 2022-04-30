const express = require("express");
const router = express.Router();

const { signUp, signin } = require("../controllers/user");
const { signUpvalidator } = require("../validator");

router.post("/signup", signUpvalidator, signUp);
router.post("/signin", signin);

module.exports = router;
