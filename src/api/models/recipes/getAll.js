const { connection } = require('../connection');

module.exports = async () => {
  const getAll = await (await connection()).collection('recipes')
    .find().toArray();
  return getAll;
};