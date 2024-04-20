const catch_async_err = require("../middlewares/catch_async_err");
const { store_token } = require("../middlewares/token");
const { compare_token } = require("../middlewares/token");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.create_account = catch_async_err(async (req, res) => {
  const find_user = await User.findOne({ email: req.body.email });
  if (find_user) {
    return res.json({
      message: "User Exists Already With That Email!",
    });
  } else {
    const user_created = await User.create(req.body);
    if (user_created) {
      return res.json({
        message: "Account Created",
      });
    } else {
      return res.json({
        message: "Error While Creating Account!",
      });
    }
  }
});

exports.login_user = catch_async_err(async (req, res) => {
  const found_user = await User.findOne({ email: req.body.email }).select("+password")
  if (!found_user) {
    return res.json({
      message: "Account Not Found!",
    });
  } else {
    const match_password = await bcrypt.compare(
      req.body.password,
      found_user.password
    );
    if (!match_password) {
      return res.json({
        message: "Password Is Incorrect!",
      });
    } else {
      const token = await store_token({ data: found_user });
      return res.cookie("token", token).json({
        message: "Logged In Successfully!",
        token
      });
    }
  }
});

exports.get_profile = catch_async_err(async (req, res) => {
  const token = req.cookies;
  if (!token) {
    return res.json({
      message: "Error While Getting Profile",
    });
  } else {
    const data = await compare_token(token.token);
    return res.json({
      data,
    });
  }
});

exports.update_profile = catch_async_err(async (req, res) => {
  const token = req.cookies;
  const compared_token = await compare_token(token.token);
  if (!compare_token || token) {
    return res.json({
      message: "Error While Getting Info!",
    });
  } else {
    const updated_account = await User.findByIdAndUpdate(compared_token._id, {
      username: req.body.username,
      avatar: req.body.avatar,
      bio: req.body.bio,
      wallet_address: req.body.wallet_address,
    });
    if (!updated_account) {
      return res.json({
        message: "Error While Updating Account!",
      });
    } else {
      return res.json({
        updated_account,
      });
    }
  }
});

exports.get_profiles = catch_async_err(async(req,res) => {
  const id = req.params.id
  const found_user = await User.findById(id).populate("digital_art")
  if(!found_user) {
    return res.json({
      message : "Account Not Found!"
    })
  }
  else {
    return res.json({
      data : found_user
    })
  }
})