const express = require('express');
const createRecipe = require('./createRecipe');
const tokenValidation = require('../../middlewares/tokenValidation');
const getAll = require('./getAll');

const router = express.Router();

router.post('/', tokenValidation, createRecipe);
router.get('/', getAll);

module.exports = router;