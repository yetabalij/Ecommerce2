const express = require("express");
const router = express.Router();

const { signUp, signin, signout } = require("../controllers/user");
const { signUpvalidator } = require("../validator");

router.post("/signup", signUpvalidator, signUp);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
