const User = require("./../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.signUp = (req, res) => {
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
};
