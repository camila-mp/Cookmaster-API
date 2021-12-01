const { connection } = require('../connection');

const findUser = async (data) => {
  const find = await (await connection()).collection('users').findOne(data);
  return find;
};

module.exports = { findUser };