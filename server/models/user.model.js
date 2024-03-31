const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const catch_async_err = require("../middlewares/catch_err");
const user_schema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    // Required Statement to validate if user has filled the field or not
    required: [true, "Please Enter Email!"],
    unique: true,
  },
  password: {
    type: String,
    // Minimum 6 Characters
    min: 6,
    // Maximum 16 Characters
    max: 16,
  },
  avatar: {
    type: String,
  },
  wallet_address: {
    type: String,
  },
  bio: {
    type: String,
    max: 200,
  },
  digital_art: [
    {
      // Ref To Artwork Id
      type: mongoose.Schema.Types.ObjectId,
      ref: "Art",
    },
  ],
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

// Pre method to check before saving the data

user_schema.pre(
  "save",
  catch_async_err(async (next) => {
    const user = this;
    if (!user.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  })
);

user_schema.methods.comparePassword = catch_async_err(
  async (candidatePassword) => {
    return await bcrypt.compare(candidatePassword, this.password);
  }
);

const User = mongoose.model("User", user_schema);
module.exports = User;