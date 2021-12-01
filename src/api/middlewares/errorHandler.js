const { internalServerError } = require('../httpStatusCodes');

module.exports = (err, _req, res, _next) => {
  if (err.code === internalServerError) console.log(err);
  console.log(err);
  return res
    .status(err.code || 500)
    .json({ message: err.message });
};