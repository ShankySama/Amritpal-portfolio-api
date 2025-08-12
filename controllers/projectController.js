const Project = require("../models/projectModel");

const getProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send("Project Created");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateProject = async (req, res) => {
  try {
    await Project.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).send("Project updated");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id });
    res.status(200).send("Project deleted");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getProject, createProject, updateProject, deleteProject };
