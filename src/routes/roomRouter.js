const roomController = require('../controllers/roomController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const upload = require('../middleware/multer');
const validate = require('../middleware/validate');
const roomScheme = require('../validate/roomScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


router.use(user);
router.get('/:id', tryCatch(roomController.getRoomById));
router.get('/', tryCatch(roomController.getAllRooms));
router.get('/:id/hotel', tryCatch(roomController.getHotelByRoomId));
router.get('/:id/bookings', tryCatch(roomController.getBookingsByRoomId));

router.use(admin);
router.post('/', validate(roomScheme.create), tryCatch(roomController.addRoom));
router.post('/:id', validate(roomScheme.update), upload.single('photo'), tryCatch(roomController.addPhoto));
router.delete('/:id', tryCatch(roomController.deleteRoom));

module.exports = router;