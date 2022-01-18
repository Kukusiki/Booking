const roomService = require('../services/roomService');
const code = require('http-status-codes').StatusCodes;

class RoomController {

    async addRoom(req, res, next) {
        const room = req.body;
        await roomService.addRoom(room);

        res.status(code.CREATED).json({ message: 'Room created successfully' });
    }


    async getRoomById(req, res, next) {
        const roomId = req.params.id;
        const room = await roomService.getRoomById(roomId);

        res.status(code.OK).json({ message: room });
    }


    async getAllRooms(req, res, next) {
        const page = req.params.page;
        const rooms = await roomService.getAllRooms(page);

        res.status(code.OK).json({ message: rooms });
    }


    async getHotelByRoomId(req, res, next) {
        const roomId = req.params.id;
        const hotel = await roomService.getHotelByRoomId(roomId);

        res.status(code.OK).json({ message: hotel });
    }


    async getBookingsByRoomId(req, res, next) {
        const roleId = req.params.id;
        const bookings = await roomService.getBookingsByRoomId(roleId);

        res.status(code.OK).json({ message: bookings });
    }


    async deleteRoom(req, res, next) {
        const roomId = req.params.id;
        const numberOfRooms = await roomService.deleteRoom(roomId);

        res.status(code.OK).json({ message: numberOfRooms });
    }

}

module.exports = new RoomController();