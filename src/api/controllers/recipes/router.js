const express = require('express');
const createRecipe = require('./createRecipe');
const tokenValidation = require('../../middlewares/tokenValidation');
const getAll = require('./getAll');
const getById = require('./getById');
const updateRecipe = require('./updateRecipe');

const router = express.Router();

router.post('/', tokenValidation, createRecipe);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', tokenValidation, updateRecipe);

module.exports = router;