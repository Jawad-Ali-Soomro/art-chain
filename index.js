const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
app.listen(process.env.PORT || 8080, () => {
  console.log("server is on");
});
