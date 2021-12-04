const { connection } = require('../connection');

module.exports = async (data) => {
  const find = await (await connection()).collection('users').findOne(data);
  return find;
};
