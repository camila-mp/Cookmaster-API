const getAllModel = require('../../models/recipes/getAll');

module.exports = async () => {
  const list = await getAllModel();
  return list;
};