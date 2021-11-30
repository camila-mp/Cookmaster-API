const express = require('express');
const createUser = require('./create');

const router = express.Router();

router.post('/', createUser);

module.exports = router;