const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  university: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("education", educationSchema);
