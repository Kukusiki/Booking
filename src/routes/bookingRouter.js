const bookingController = require('../controllers/bookingController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const validate = require('../middleware/validate');
const bookingScheme = require('../validate/bookingScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


router.use(user);
router.get('/:id', tryCatch(bookingController.getBookingById));
router.get('/', tryCatch(bookingController.getAllBookings));
router.get('/:id/room', tryCatch(bookingController.getRoomByBookingId));
router.get('/:id/user', tryCatch(bookingController.getUserByBookingId));

router.use(admin);
router.post('/', validate(bookingScheme.create), tryCatch(bookingController.addBooking));
router.delete('/:id', tryCatch(bookingController.deleteBooking));

module.exports = router;