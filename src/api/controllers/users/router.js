const express = require('express');
const createUser = require('./createUser');

const router = express.Router();

router.post('/', createUser);

module.exports = router;