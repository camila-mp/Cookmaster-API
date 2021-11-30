const { internalServerError, badRequest, conflict } = require('../httpStatusCodes');

module.exports = (err, _req, res, _next) => {
  let status = internalServerError;
  if (err.message === 'Invalid entries. Try again.') status = badRequest;
  if (err.message === 'Email already registered') status = conflict;
  if (status === internalServerError) console.log(err);

  return res
    .status(status)
    .json({ message: err.message });
};