const roleController = require('../controllers/roleController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


//router.use(user);
router.get('/:id', tryCatch(roleController.getRoleById));
router.get('/', tryCatch(roleController.getAllRoles));
router.get('/:id/userRole', tryCatch(roleController.getUserRoleByRoleId));

//router.use(admin);
router.post('/', tryCatch(roleController.addRole));
router.delete('/:id', tryCatch(roleController.deleteRole));

module.exports = router;