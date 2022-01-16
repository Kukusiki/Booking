const userInfoController = require('../controllers/userInfoController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


//router.use(user);
router.get('/:id', tryCatch(userInfoController.getUserInfoById));
router.get('/', tryCatch(userInfoController.getAllUserInfos));
router.get('/:id/user', tryCatch(userInfoController.getUserByUserInfoId));

//router.use(admin);
router.post('/', tryCatch(userInfoController.addUserInfo));
router.delete('/:id', tryCatch(userInfoController.deleteUserInfo));

module.exports = router;