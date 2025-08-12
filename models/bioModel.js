const { required } = require("joi");
const mongoose = require("mongoose");
const bioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, reqiured: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("bio", bioSchema);
