const roomController = require('../controllers/roomController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');
const upload = require('../middleware/multer');


//router.use(user);
router.get('/:id', tryCatch(roomController.getRoomById));
router.get('/', tryCatch(roomController.getAllRooms));
router.get('/:id/hotel', tryCatch(roomController.getHotelByRoomId));
router.get('/:id/bookings', tryCatch(roomController.getBookingsByRoomId));

//router.use(admin);
router.post('/', tryCatch(roomController.addRoom));
router.post('/:id', upload.single('photo'), tryCatch(roomController.addPhoto));
router.delete('/:id', tryCatch(roomController.deleteRoom));

module.exports = router;