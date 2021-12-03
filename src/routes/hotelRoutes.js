const hotelController = require('../controllers/hotelController');
const express = require('express');
const router = express.Router();

router.post('/hotel', hotelController.addHotel);
router.get('/hotel/:id', hotelController.getHotelById);
router.get('/hotel', hotelController.getAllHotels);
router.get('/rooms/:hotelId', hotelController.getRoomsByHotelId);
router.get('/freeRooms/:hotelId', hotelController.getFreeRoomsByHotelId);
router.delete('/hotel/:id', hotelController.deleteHotel);

module.exports = router;