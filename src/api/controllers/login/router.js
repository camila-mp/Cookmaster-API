const express = require('express');
const login = require('./login');

const router = express.Router();

router.post('/', login);

module.exports = router;