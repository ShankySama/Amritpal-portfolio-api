const {
  createBio,
  getBio,
  updateBio,
} = require("../controllers/bioController");
const {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");
const {
  getExp,
  createExp,
  updateExp,
  deleteExp,
} = require("../controllers/experienceController");
const { validateBio } = require("../middlewares/validators/bioValidator");
const {
  validateEducation,
} = require("../middlewares/validators/educationValidator");

const express = require("express");
const {
  validateExp,
} = require("../middlewares/validators/experienceValidator");
const {
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
const { validateSkill } = require("../middlewares/validators/skillValidator");
const {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  validateProject,
} = require("../middlewares/validators/projectValidator");
const router = express.Router();

// bio
router.get("/bio", getBio);
router.post("/bio", validateBio, createBio);
router.put("/bio", validateBio, updateBio);

// education
router.get("/education", getEducation);
router.post("/education", validateEducation, createEducation);
router.put("/education/:id", validateEducation, updateEducation);
router.delete("/education/:id", deleteEducation);

// experience
router.get("/experience", getExp);
router.post("/experience", validateExp, createExp);
router.put("/experience/:id", validateExp, updateExp);
router.delete("/experience/:id", deleteExp);

// skill
router.get("/skill", getSkill);
router.post("/skill", validateSkill, createSkill);
router.put("/skill/:id", validateSkill, updateSkill);
router.delete("/skill/:id", deleteSkill);

// project
router.get("/project", getProject);
router.post("/project", validateProject, createProject);
router.put("/project/:id", validateProject, updateProject);
router.delete("/project/:id", deleteProject);

module.exports = { router };
