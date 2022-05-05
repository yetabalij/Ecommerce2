const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    lastName: {
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("hased_password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.hased_password = await bcrypt.hash(this.hased_password, salt);
  next();
});

userSchema.methods.matchPassword = async function (hased_password) {
  return await bcrypt.compare(hased_password, this.hased_password);
};

module.exports = mongoose.model("User", userSchema);
