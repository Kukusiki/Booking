const userInfoController = require('../controllers/userInfoController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const upload = require('../middleware/multer');
const validate = require('../middleware/validate');
const userInfoScheme = require('../validate/userInfoScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


//router.use(user);
router.get('/:id', tryCatch(userInfoController.getUserInfoById));
router.get('/', tryCatch(userInfoController.getAllUserInfos));
router.get('/:id/user', tryCatch(userInfoController.getUserByUserInfoId));

//router.use(admin);
router.post('/', validate(userInfoScheme.create), tryCatch(userInfoController.addUserInfo));
router.post('/:id', validate(userInfoScheme.update), upload.single('photo'), tryCatch(userInfoController.addPhoto));
router.delete('/:id', tryCatch(userInfoController.deleteUserInfo));

module.exports = router;