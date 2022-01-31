const roleController = require('../controllers/roleController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const validate = require('../middleware/validate');
const roleScheme = require('../validate/roleScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


router.use(user);
router.get('/:id', tryCatch(roleController.getRoleById));
router.get('/', tryCatch(roleController.getAllRoles));
router.get('/:id/userRole', tryCatch(roleController.getUserRoleByRoleId));

router.use(admin);
router.post('/', validate(roleScheme.create), tryCatch(roleController.addRole));
router.delete('/:id', tryCatch(roleController.deleteRole));

module.exports = router;