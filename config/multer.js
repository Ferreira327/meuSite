const multer = require("multer");

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname) // Define o nome do arquivo como o nome original
    }
  });

const upload = multer({storage:storage})

module.exports = upload;