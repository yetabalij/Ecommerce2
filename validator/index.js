const { body } = require("express-validator");
const { isLinux } = require("nodemon/lib/utils");
const User = require("../models/user");
exports.signUpvalidator = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("user name is required.")
    .isString()
    .withMessage("user name sholuld be strign"),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("email  is required.")
    .isEmail()
    .withMessage("Please Provid Email"),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("password  is required.")
    .isString()
    //.notEmpty()
    .isLength({ min: 8 })
    .not()
    .withMessage("password mustt be at least 8 chars")
    //.notEmpty()
    .isNumeric(),
  //.withMessage("password must has number.")
];
