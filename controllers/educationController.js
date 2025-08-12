const Education = require("../models/educationModel");

const getEducation = async (req, res) => {
  try {
    const educations = await Education.find();
    res.status(200).send(educations);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).send("Educaiton Created");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateEducation = async (req, res) => {
  try {
    const updated = await Education.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send("Education Updated");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteEducation = async (req, res) => {
  try {
    await Education.deleteOne({ _id: req.params.id });
    res.status(200).send("Education Deleted");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};
