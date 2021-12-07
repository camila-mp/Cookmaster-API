const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (id, path) => {
  await (await connection()).collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { image: path } });
  const updatedRecipe = await (await connection()).collection('recipes')
  .findOne({ _id: ObjectId(id) });
  return updatedRecipe;
};