const multer = require('multer');

const fileFilter = (req, file, cb) => {
    const info = file.mimetype.split('/');
    if (info[0] == 'image') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ dest: '../img', fileFilter: fileFilter });
module.exports = upload;