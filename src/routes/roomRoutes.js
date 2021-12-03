const roomController = require('../controllers/roomController');
const express = require('express');
const router = express.Router();

router.post('/room', roomController.addRoom);
router.get('/room/:id', roomController.getRoomById);
router.get('/room', roomController.getAllRooms);
router.get('/hotel/:roomId', roomController.getHotelByRoomlId);
router.delete('/room/:id', roomController.deleteRoom);

module.exports = router;