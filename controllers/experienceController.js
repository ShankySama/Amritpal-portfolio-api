const Experience = require("../models/experienceModal");

const getExp = async (req, res) => {
  try {
    const exp = await Experience.find();
    res.status(200).send(exp);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const createExp = async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(200).send("Experience Created");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateExp = async (req, res) => {
  try {
    await Experience.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send("Experience updated");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteExp = async (req, res) => {
  try {
    await Experience.deleteOne({ _id: req.params.id });
    res.status(200).send('Experience deleted');
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getExp, createExp, updateExp, deleteExp };
