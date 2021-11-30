const jwt = require('jsonwebtoken');
const findUser = require('../../models/users/findUser');

const API_SECRET = 'segredo';

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const genToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { email, password } = decoded.data;
    const user = await findUser(email, password);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { genToken, validateToken };