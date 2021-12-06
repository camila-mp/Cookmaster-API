const idValidation = require('../../middlewares/idValidation');
const update = require('../../models/recipes/updateRecipe');
const findUser = require('../../models/users/findUser');
const findById = require('../../models/recipes/getById');
const status = require('../../httpStatusCodes');

module.exports = async (id, recipeData) => {
  const validation = idValidation(id);
  if (validation.err) return validation;

  const recipe = await findById(id);
  const { userId } = recipe;
  const { _id, role } = findUser({ userId });

  if ((_id !== userId && role === 'admin') || (_id === userId)) {
    return update(id, recipeData);
  }
  return { err: { message: 'jwt malformed', code: status.unauthorized } };
};