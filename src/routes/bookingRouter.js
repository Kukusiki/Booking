const bookingController = require('../controllers/bookingController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


//router.use(user);
router.get('/:id', tryCatch(bookingController.getBookingById));
router.get('/', tryCatch(bookingController.getAllBookings));
router.get('/:id/room', tryCatch(bookingController.getRoomByBookingId));
router.get('/:id/user', tryCatch(bookingController.getUserByBookingId));

//router.use(admin);
router.post('/', tryCatch(bookingController.addBooking));
router.delete('/:id', tryCatch(bookingController.deleteBooking));

module.exports = router;