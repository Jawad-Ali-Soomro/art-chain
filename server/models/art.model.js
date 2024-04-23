const mongoose = require("mongoose");
const art_schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter A Title!"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Description!"],
  },
  category : {
    default : "Digital",
    type : String
  },
  ipfs_hash: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  previous_owners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  price: {
    type: Number,
    required: [true, "Please Enter The Price!"],
  },
});

const Art = mongoose.model("Art" , art_schema)
module.exports = Art