const mongoose = require("mongoose");
const rpslsSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  result: { type: String, required: true },
});
const Mrpsls = mongoose.model("rpsls", rpslsSchema);
module.exports = { Mrpsls };
