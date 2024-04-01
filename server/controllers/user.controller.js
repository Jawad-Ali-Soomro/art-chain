const catch_async_err = require("../middlewares/catch_async_err");
const User = require("../models/user.model");

exports.create_account = catch_async_err(async (req, res) => {
  const find_user = await User.findOne({ email });
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
