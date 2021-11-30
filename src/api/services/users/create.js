const { createUser, findUserEmail } = require('../../models/users/create');
const { validateUserData } = require('../../middlewares/userValidations');

const error = { message: 'Email already registered' };

module.exports = async (userData) => {
  const { name, email, password } = userData;

  const validateData = validateUserData({ name, email, password });
  if (validateData !== true) return validateData;

  const validateEmail = await findUserEmail(email);
  if (validateEmail) return { err: error };
 
  const newUser = await createUser(userData);
  delete newUser.password;
  return { user: newUser };
};
