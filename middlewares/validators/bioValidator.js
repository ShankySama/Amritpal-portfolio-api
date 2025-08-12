const Joi = require("joi");
const { BODY_REQUIRED } = require("../../constants");

const bioschema = Joi.object({
  name: Joi.string().required().max(20).min(3),
  designation: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().min(10).required(),
  location: Joi.string().min(3).required(),
});

const validateBio = (req, res, next) => {
  const { error } = bioschema.validate(req.body);
  if(req.body  === undefined) return res.status(400).send(BODY_REQUIRED);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = { validateBio };
