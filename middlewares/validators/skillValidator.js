const Joi = require("joi");
const { BODY_REQUIRED } = require("../../constants");
const skillSchema = Joi.object({
  title: Joi.string().required(),
  skills: Joi.array().items(Joi.string()).required(),
});
const validateSkill = (req, res, next) => {
  const { error } = skillSchema.validate(req.body);
  if (!req.body) {
    return res.status(400).send(BODY_REQUIRED);
  }
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};
module.exports = { validateSkill };
