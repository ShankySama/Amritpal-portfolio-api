const Joi = require("joi");
const { BODY_REQUIRED } = require("../../constants");
const projectSchema = Joi.object({
  projectName: Joi.string().required(),
  link: Joi.string().required(),
  type: Joi.string().required(),
  desc: Joi.string().required(),
});

const validateProject = (req, res, next) => {
  const { error } = projectSchema.validate(req.body);
  if (!req.body) {
    return res.status(400).send(BODY_REQUIRED);
  }
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

module.exports = { validateProject };
