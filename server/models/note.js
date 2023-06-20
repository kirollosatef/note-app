const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  title: {
    tpye: String,
    required: true,
  },
  body: {
    tpye: String,
    required: true,
  },
  createdAt: {
    tpye: String,
    required: true,
  },
  updatedAt: {
    tpye: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);