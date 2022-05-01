const express = require("express");
const router = express.Router();

const {
  signUp,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { signUpvalidator } = require("../validator");

router.post("/signup", signUpvalidator, signUp);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
