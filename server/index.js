const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const cors = require('cors')
const { connect_database } = require("./config/database");
const user_route = require("./routes/user.route");
const transaction_route = require("./routes/transaction.route");
const art_route = require("./routes/art.route");
connect_database()
const app = express();
app.listen(process.env.PORT || 8080, () => {
  console.log("server is on");
});

// applying middlewares

app.use(express.json())
app.use(cors())

// applying routes

app.use('/api/user' , user_route)
app.use('/api/transaction' , transaction_route)
app.use('/api/art' , art_route)