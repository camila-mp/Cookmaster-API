const get = require('../../services/recipes/getAll');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  try {
    const list = await get();
    return res.status(status.ok).json(list);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};
