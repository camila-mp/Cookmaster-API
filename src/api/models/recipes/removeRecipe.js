const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (id) => {
  await (await connection()).collection('recipes')
    .deleteOne({ _id: ObjectId(id) });
};