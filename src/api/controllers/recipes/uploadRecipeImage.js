const upload = require('../../services/recipes/uploadRecipeImage');
const status = require('../../httpStatusCodes');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { filename } = req.file;
  const { userId } = req;

  try {
    const path = `localhost:3000/src/uploads/${filename}`;
    const imageUpload = await upload(id, path, userId);

    if (imageUpload.err) return next(imageUpload.err);

    return res.status(status.ok).json(imageUpload);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = status.internalServerError;
    next(err);
  }
};