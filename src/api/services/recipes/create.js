const createRecipe = require('../../models/recipes/createRecipe');
const status = require('../../httpStatusCodes');

module.exports = async ({ name, ingredients, preparation, userId }) => {
  if (!name || !ingredients || !preparation) {
    return { err: { message: 'Invalid entries. Try again.', code: status.badRequest } };
  }
  const newRecipe = await createRecipe({ name, ingredients, preparation, userId });
  return { recipe: newRecipe };
};