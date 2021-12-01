const { validateToken } = require('../services/auth/auth');
const status = require('../httpStatusCodes');

module.exports = async (req, next) => {
  const { token } = req.headers.authorization;

  const tokenValidation = validateToken(token);

  if (tokenValidation) {
    req.userId = tokenValidation;
    return next();
  } 
  return { err: { message: 'jwt malformed', code: status.unauthorized } };
};
