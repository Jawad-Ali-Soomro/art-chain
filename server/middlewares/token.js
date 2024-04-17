const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config/.env" });

exports.store_token = async (data) => {
  return await jwt.sign(data, process.env.SECRET_KEY);
};

exports.compare_token = async (token) => {
  return await jwt.verify(token, process.env.SECRET_KEY);
};

