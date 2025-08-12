const { createBio, getBio, updateBio } = require("../controllers/bioController");
const { getEducation, createEducation, updateEducation, deleteEducation } = require("../controllers/educationController");
const { validateBio } = require("../middlewares/validators/bioValidator");
const { validateEducation } = require("../middlewares/validators/educationValidator");

const express = require("express");
const router = express.Router();

// bio
router.get("/bio", getBio);
router.post("/bio", validateBio, createBio);
router.put("/bio",validateBio,updateBio);

// education
router.get('/education',getEducation);
router.post('/education',validateEducation,createEducation);
router.put('/education/:id',validateEducation,updateEducation);
router.delete('/education/:id',deleteEducation);

module.exports = { router };
