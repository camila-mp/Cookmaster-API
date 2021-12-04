const { createUser } = require('../../models/users/create');
const findUser = require('../../models/users/findUser');
const { validateUserData } = require('../../middlewares/userValidations');
const status = require('../../httpStatusCodes');

module.exports = async (userData) => {
  const { name, email, password } = userData;

  const validateData = validateUserData({ name, email, password });

  if (validateData !== true) return validateData;
  
  const validateEmail = await findUser({ email });
  if (validateEmail) return { err: { message: 'Email already registered', code: status.conflict } };
 
  const newUser = await createUser(userData);
  delete newUser.password;
  return { user: newUser };
};
