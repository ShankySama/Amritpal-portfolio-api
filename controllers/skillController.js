const Skill = require("../models/skillModel");

const getSkill= async (req, res) => {
  try {
    const skill = await Skill.find();
    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(200).send("skill Created");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateSkill = async (req, res) => {
  try {
    await Skill.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send("Skill updated");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteSkill = async (req, res) => {
  try {
    await Skill.deleteOne({ _id: req.params.id });
    res.status(200).send('Skill deleted');
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getSkill, createSkill, updateSkill, deleteSkill };
