const Joi = require('joi');
const status = require('../httpStatusCodes');

// fonte do regex do email: http://zparacha.com/validate-email-address-using-javascript-regular-expression

const validateUserData = ({ name, email, password }) => {
  const validation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required(),
    password: Joi.string().required(),
  }).validate({ name, email, password });

  if (validation.error) {
    return { err: { message: 'Invalid entries. Try again.', code: status.badRequest } };
  } 
  return true;
};

module.exports = { validateUserData };