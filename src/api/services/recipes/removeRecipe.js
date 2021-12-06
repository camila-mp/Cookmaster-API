const remove = require('../../models/recipes/removeRecipe');
const idValidation = require('../../middlewares/idValidation');
const findById = require('../../models/recipes/getById');
const findUser = require('../../models/users/findUser');
const status = require('../../httpStatusCodes');

module.exports = async (id, userIdToken) => {
  const validation = idValidation(id);
  if (validation.err) return validation;

  const recipe = await findById(id);
  const { userId } = recipe;

  const user = await findUser({ _id: userIdToken });
  const { role } = user;

  if (userIdToken.toString() === userId.toString() || role === 'admin') {
    return remove(id);
  }
  return { err: { message: 'jwt malformed', code: status.unauthorized } };
};