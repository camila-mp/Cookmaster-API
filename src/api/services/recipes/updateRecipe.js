const idValidation = require('../../middlewares/idValidation');
const update = require('../../models/recipes/updateRecipe');
const findUser = require('../../models/users/findUser');
const findById = require('../../models/recipes/getById');
const status = require('../../httpStatusCodes');

module.exports = async (id, recipeData, userIdToken) => {
  const validation = idValidation(id);
  if (validation.err) return validation;

  const recipe = await findById(id);
  const { userId } = recipe;

  const user = await findUser({ _id: userIdToken });
  const { role } = user;

  if (userIdToken.toString() === userId.toString() || role === 'admin') {
    return update(id, recipeData, userIdToken);
  }
  return { err: { message: 'jwt malformed', code: status.unauthorized } };
};