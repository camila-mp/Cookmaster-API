const { connection } = require('../connection');

const createUser = async (userData) => {
  const newUser = await (await connection()).collection('users')
    .insertOne({ ...userData, role: 'user' });
  return ({
    ...userData,
    role: 'user',
    _id: newUser.insertedId,
  });
};

const findUserEmail = async (email) => {
  const findEmail = await (await connection()).collection('users').findOne({ email });
  return findEmail;
};

module.exports = { createUser, findUserEmail };