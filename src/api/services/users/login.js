const findUser = require('../../models/users/findUser');
const { validateEmail } = require('../../middlewares/loginValidation');
const status = require('../../httpStatusCodes');

module.exports = async (email, password) => {
  if (!email || !password) {
    return { err: { message: 'All fields must be filled', code: status.unauthorized } };
  }
  const validateEmailRegex = validateEmail(email);
  if (validateEmailRegex.err) return validateEmailRegex;

  const validateIfUserExists = await findUser({ email, password });
  
  if (!validateIfUserExists) {
    return { err: { message: 'Incorrect username or password', code: status.unauthorized } };
  } 
  return validateIfUserExists;
};
