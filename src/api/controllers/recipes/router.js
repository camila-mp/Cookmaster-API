const express = require('express');
const createRecipe = require('./createRecipe');
const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation, createRecipe);

module.exports = router;