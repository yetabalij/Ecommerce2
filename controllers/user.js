const User = require("./../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { validationResult } = require("express-validator");

exports.signUp = (req, res, next) => {
  // const user = new User(req.body);
  // user.save((err, user) => {
  //   if (err) {
  //     return res.status(400).json({
  //       err: errorHandler(err),
  //     });
  //   }
  //   user.salt = undefined;
  //   user.hased_password = undefined;
  //   res.json({
  //     user,
  //   });
  // });
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: errorHandler(err),
        });
      }
      user.salt = undefined;
      user.hased_password = undefined;
      res.json({
        user,
      });
    });

    //res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
