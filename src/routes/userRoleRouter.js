const userRoleController = require('../controllers/userRoleController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


//router.use(user);
router.get('/:id', tryCatch(userRoleController.getUserRoleById));
router.get('/', tryCatch(userRoleController.getAllUserRoles));
router.get('/:id/user', tryCatch(userRoleController.getUserByUserRoleId));
router.get('/:id/role', tryCatch(userRoleController.getRoleByUserRoleId));

//router.use(admin);
router.post('/', tryCatch(userRoleController.addUserRole));
router.delete('/:id', tryCatch(userRoleController.deleteUserRole));

module.exports = router;