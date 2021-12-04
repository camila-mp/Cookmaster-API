const { ObjectId } = require('mongodb');
const status = require('../httpStatusCodes');

module.exports = (id) => {
  if (!ObjectId.isValid(id) || id === null || id === undefined) {
    return { err: { message: 'recipe not found', code: status.notFound } };
  }
  return 'valid id';
};
