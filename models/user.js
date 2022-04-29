const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    hased_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

//virtual fields
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.Salt = uuidv4();
    this.hased_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.Salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);