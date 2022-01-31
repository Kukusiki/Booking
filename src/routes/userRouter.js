const userController = require('../controllers/userController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const validate = require('../middleware/validate');
const userScheme = require('../validate/userScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


router.use(user);
router.get('/:id', tryCatch(userController.getUserById));
router.get('/', tryCatch(userController.getAllUsers));
router.get('/:id/bookings', tryCatch(userController.getBookingsByUserId));
router.get('/:id/reviews', tryCatch(userController.getReviewsByUserId));
router.get('/:id/userInfo', tryCatch(userController.getUserInfoByUserId));
router.get('/:id/userRole', tryCatch(userController.getUserRoleByUserId));

router.use(admin);
router.post('/', validate(userScheme.create), tryCatch(userController.addUser));
router.post('/:id', validate(userScheme.create), tryCatch(userController.addAdminByUserId));
router.get('/count', tryCatch(userController.getUsers));
router.delete('/:id', tryCatch(userController.deleteUser));

module.exports = router;