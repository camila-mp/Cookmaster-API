const { connection } = require('../connection');

module.exports = async (data) => {
  const insertRecipe = await (await connection()).collection('recipes')
    .insertOne({ ...data, image: '' });
  return { ...data, _id: insertRecipe.insertedId };
};
