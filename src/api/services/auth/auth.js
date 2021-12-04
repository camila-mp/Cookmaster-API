const jwt = require('jsonwebtoken');
const findUser = require('../../models/users/findUser');
const status = require('../../httpStatusCodes');

const API_SECRET = 'segredo';

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const genToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { email } = decoded.data;

    const user = await findUser({ email });

    if (user) {
      const { _id } = user;
      return _id;
    }

    return false;
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    return err;
  }
};

module.exports = { genToken, validateToken };