const mongoose = require("mongoose");
exports.connect_database = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("database connected!"));
};
