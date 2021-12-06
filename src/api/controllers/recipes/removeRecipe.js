const remove = require('../../services/recipes/removeRecipe');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const removeRecipe = remove(id, userId);

    if (removeRecipe.err) return next(removeRecipe.err);

    return res.status(status.noContent).json(removeRecipe);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};