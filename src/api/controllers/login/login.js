const loginService = require('../../services/users/login');
const { genToken } = require('../../services/auth/auth');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userLogin = await loginService(email, password);
    if (userLogin.err) return next(userLogin.err);

    const { _id, role } = userLogin;
    
    const token = genToken(_id, email, role);

    return res.status(status.ok).json({ token });
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};
