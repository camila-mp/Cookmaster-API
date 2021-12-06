const status = require('../../httpStatusCodes');
const update = require('../../services/recipes/updateRecipe');

module.exports = async (req, res, next) => {
  const { recipeData } = req.body;
  const { id } = req.params;

  try {
    const recipeUpdate = update(id, recipeData);
    if (recipeUpdate.err) return next(recipeUpdate.err);

    return res.status(status.ok).json(recipeUpdate);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};