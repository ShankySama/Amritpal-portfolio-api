const Joi = require("joi");
const { BODY_REQUIRED } = require("../../constants");
const expSchema = Joi.object({
  orgName: Joi.string().required(),
  designation: Joi.string().required(),
  desc: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date(),
  location: Joi.string().required(),
});

const validateExp = (req, res, next) => {
  const { error } = expSchema.validate(req.body);
  if (!req.body) {
    return res.status(400).send(BODY_REQUIRED);
  }
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

module.exports = { validateExp };
