const Bio = require("../models/bioModel");
const createBio = async (req, res) => {
  try {
    const bio = new Bio(req.body);
    await bio.save();
    return res.status(201).send("Bio Created");
  } catch (err) {
    res.status(500).send("Internal Server error");
  }
};

const getBio = async (req, res) => {
  try {
    const bio = await Bio.findOne({}, { _id: 0, __v: 0 });
    return res.status(200).json(bio);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

const updateBio = async (req, res) => {
  try {
    const bio = await Bio.findOne();
    await Bio.updateOne(
      { _id: bio.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send('Bio Updated')
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

module.exports = { createBio, getBio, updateBio };
