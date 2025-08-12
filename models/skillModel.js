const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  skills: { type: [String], required: true },
});
module.exports = mongoose.model("skill", skillSchema);
