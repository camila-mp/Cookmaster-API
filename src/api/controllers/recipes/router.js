const express = require('express');
const createRecipe = require('./createRecipe');
const tokenValidation = require('../../middlewares/tokenValidation');
const getAll = require('./getAll');
const getById = require('./getById');
const updateRecipe = require('./updateRecipe');
const removeRecipe = require('./removeRecipe');
const uploadImage = require('./uploadRecipeImage');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.post('/', tokenValidation, createRecipe);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', tokenValidation, updateRecipe);
router.delete('/:id', tokenValidation, removeRecipe);
router.put('/:id/image', tokenValidation, upload.single('image'), uploadImage);

module.exports = router;