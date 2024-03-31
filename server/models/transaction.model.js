const mongoose = require("mongoose");
const transaction_schema = new mongoose.Schema({
  transaction_id: {
    type: String,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  art_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Art",
  },
  transaction_type: {
    type: String,
    enum: ["Purchase", "Transfer"],
  },
  transaction_date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transaction_schema);
module.exports = Transaction;
