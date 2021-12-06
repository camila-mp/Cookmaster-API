const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (id) => {
  const findById = await (await connection()).collection('recipes').findOne({ _id: ObjectId(id) });
  return findById;
};