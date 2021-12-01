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

module.exports = { createUser };