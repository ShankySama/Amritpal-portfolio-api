const Joi = require("joi");
const { BODY_REQUIRED } = require("../../constants");

const educationSchema = Joi.object({
    courseName: Joi.string().required(),
    university: Joi.string().required(),
    startDate:Joi.date().required(),
    endDate:Joi.date().required(),
    location:Joi.string().required(),
});

const validateEducation = (req, res, next) => {
  const { error } = educationSchema.validate(req.body);
  if(req.body  === undefined) return res.status(400).send(BODY_REQUIRED);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = { validateEducation };
