const hotelController = require('../controllers/hotelController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const upload = require('../middleware/multer');
const validate = require('../middleware/validate');
const hotelScheme = require('../validate/hotelScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


//router.use(user);
router.get('/:id', tryCatch(hotelController.getHotelById));
router.get('/', tryCatch(hotelController.getAllHotels));
router.get('/:id/rooms', tryCatch(hotelController.getRoomsByHotelId));
router.get('/:id/freeRooms', tryCatch(hotelController.getFreeRoomsByHotelId));
router.get('/:id/reviews', tryCatch(hotelController.getReviewsByHotelId));

//router.use(admin);
router.post('/', validate(hotelScheme.create), tryCatch(hotelController.addHotel));
router.post('/:id', validate(hotelScheme.update), upload.single('photo'), tryCatch(hotelController.addPhoto));
router.delete('/:id', tryCatch(hotelController.deleteHotel));

module.exports = router;