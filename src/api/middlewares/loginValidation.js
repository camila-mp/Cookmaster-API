const Joi = require('joi');

// fonte do regex do email: http://zparacha.com/validate-email-address-using-javascript-regular-expression

const validateEmail = (email) => {
  const valEmailFormat = Joi.object({
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) })
    .validate({ email });
  
  if (valEmailFormat.error) return { err: { message: 'Incorrect username or password' } };
  return true;
};

module.exports = { validateEmail };