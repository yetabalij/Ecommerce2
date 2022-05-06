const User = require("../models/user");
const jwt = require("jsonwebtoken");
//const expressJwt = require("express-jwt");
const { expressjwt: expressJwt } = require("express-jwt");
const user = require("../models/user");
// const { errorHandler } = require("../helpers/dbErrorHandler");
// const { validationResult } = require("express-validator");
require("dotenv").config();

exports.signUp = async (req, res, next) => {
  const { firstName, lastName, email, hased_password } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      hased_password,
    });
    user.hased_password = undefined;
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
    return res.json({ token, user: { _id, name, role, email } });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "signout success" });
};

//console.log(JWT_SECREAT);
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECREAT,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      err: "Access denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      err: "Admin resource access denied",
    });
  }
  next();
};
