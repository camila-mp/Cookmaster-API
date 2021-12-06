const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (id, recipeData) => {
  await (await connection()).collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { ...recipeData } });
  
  return ({ _id: ObjectId(id), ...recipeData });
};
