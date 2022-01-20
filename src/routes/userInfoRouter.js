const userInfoController = require('../controllers/userInfoController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');
const upload = require('../middleware/multer');


//router.use(user);
router.get('/:id', tryCatch(userInfoController.getUserInfoById));
router.get('/', tryCatch(userInfoController.getAllUserInfos));
router.get('/:id/user', tryCatch(userInfoController.getUserByUserInfoId));

//router.use(admin);
router.post('/', tryCatch(userInfoController.addUserInfo));
router.post('/:id', upload.single('photo'), tryCatch(userInfoController.addPhoto));
router.delete('/:id', tryCatch(userInfoController.deleteUserInfo));

module.exports = router;