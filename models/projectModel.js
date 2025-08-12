const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  link: { type: String, required: true },
  type: { type: String, required: true },
  desc: { type: String, required: true },
});

module.exports = mongoose.model("project", projectSchema);
