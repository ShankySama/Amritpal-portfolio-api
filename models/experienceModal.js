const mongoose = require("mongoose");
const expSchema = new mongoose.Schema({
  orgName: { type: String, required: true },
  designation: { type: String, required: true },
  desc: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: Date },
  location: { type: String, required: true },
});

module.exports = mongoose.model("experience", expSchema);
