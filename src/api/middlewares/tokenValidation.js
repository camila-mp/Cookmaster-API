const { validateToken } = require('../services/auth/auth');
const status = require('../httpStatusCodes');

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next({ message: 'missing auth token', code: status.unauthorized });

  const tokenValidation = await validateToken(token);

  if (tokenValidation.message) {
    return next({ message: 'jwt malformed', code: status.unauthorized });
  } 
  
  req.userId = tokenValidation;
  return next();
};
