const express = require('express');
const createRecipe = require('./createRecipe');
const tokenValidation = require('../../middlewares/tokenValidation');
const getAll = require('./getAll');
const getById = require('./getById');

const router = express.Router();

router.post('/', tokenValidation, createRecipe);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;