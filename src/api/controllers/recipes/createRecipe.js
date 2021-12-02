const status = require('../../httpStatusCodes');
const create = require('../../services/recipes/create');

module.exports = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;
  const { userId } = req;

  try {
    const newRecipe = await create({ name, ingredients, preparation, userId });

    if (newRecipe.err) return next(newRecipe.err);
    return res.status(status.created).json(newRecipe);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};
