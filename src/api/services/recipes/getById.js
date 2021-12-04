const getById = require('../../models/recipes/getById');
const idValidation = require('../../middlewares/idValidation');

module.exports = async (id) => {
  const validation = idValidation(id);
  
  if (validation.err) return validation;
  const recipe = await getById(id);
  console.log(recipe);

  return recipe;
};