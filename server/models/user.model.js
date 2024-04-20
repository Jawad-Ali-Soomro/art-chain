const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
    select: false,
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
      default: [],
      // Ref To Artwork Id
      type: mongoose.Schema.Types.ObjectId,
      ref: "Art",
    },
  ],
  transactions: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Pre method to check before saving the data

user_schema.pre("save", async function () {
  try {
    const user = this;
    if (!user.isModified("password")) return;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return console.log(error);
  }
});

const User = mongoose.model("User", user_schema);
module.exports = User;
