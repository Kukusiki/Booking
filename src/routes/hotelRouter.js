const hotelController = require('../controllers/hotelController');
const admin = require('../middleware/admin');
const user = require('../middleware/user');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');
const upload = require('../middleware/multer');


//router.use(user);
router.get('/:id', tryCatch(hotelController.getHotelById));
router.get('/', tryCatch(hotelController.getAllHotels));
router.get('/:id/rooms', tryCatch(hotelController.getRoomsByHotelId));
router.get('/:id/freeRooms', tryCatch(hotelController.getFreeRoomsByHotelId));
router.get('/:id/reviews', tryCatch(hotelController.getReviewsByHotelId));

//router.use(admin);
router.post('/', tryCatch(hotelController.addHotel));
router.post('/:id', upload.single('photo'), tryCatch(hotelController.addPhoto));
router.delete('/:id', tryCatch(hotelController.deleteHotel));

module.exports = router;