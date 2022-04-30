const User = require("./../models/user");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");
// const { errorHandler } = require("../helpers/dbErrorHandler");
// const { validationResult } = require("express-validator");

exports.signUp = async (req, res, next) => {
  const { name, email, hased_password } = req.body;
  console.log(hased_password);
  try {
    const user = await User.create({
      name,
      email,
      hased_password,
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.signin = async (req, res, next) => {
  const { email, hased_password } = req.body;
  if (!email || !hased_password) {
    res.status(400).json({
      success: false,
      error: "please provide email and pass",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+hased_password");
    if (!user) {
      res.status(404).json({
        success: false,
        error: "invalid password",
      });
    }
    const isMatch = await user.matchPassword(hased_password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }
    //generate a signed token with user id and secreat
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECREAT);
    //persist the token as 't' in cookie with expirty date
    res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and token to fontend client
    const { _id, name, role } = user;
    return res.json({ token, _id, name, role, email });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
