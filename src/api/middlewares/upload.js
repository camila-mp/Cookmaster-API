const path = require('path');
const multer = require('multer');

const uploadPath = path.join(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => { callback(null, uploadPath); },
  filename: (req, _file, callback) => { callback(null, `${req.params.id}.jpeg`); },
});

module.exports = multer({ storage });