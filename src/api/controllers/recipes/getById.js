const get = require('../../services/recipes/getById');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const getById = await get(id);
    if (getById.err) return next(getById.err);

    return res.status(status.ok).json(getById);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};