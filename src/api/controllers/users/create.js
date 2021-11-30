const create = require('../../services/users/create');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  const userData = req.body;

  try {
    const newUser = await create(userData);
    if (newUser.err) return next(newUser.err);

    return res.status(status.created).json(newUser);
  } catch (err) {
    err.message = 'Internal server error';
    next(err);
  }
};