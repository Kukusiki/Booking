const roomService = require('../services/roomService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class RoomController {

    async addRoom(req, res, next) {
        const room = req.body;
        await roomService.addRoom(room);

        res.status(StatuseCodes.CREATED).json({ message: 'Room created successfully' });
    }


    async addPhoto(req, res, next) {
        const roomId = req.params.id;
        const file = req.file;

        await roomService.addPhoto({ roomId, file });

        res.status(StatuseCodes.CREATED).json({ message: 'Room\'s photo add successfully' });
    }


    async getRoomById(req, res, next) {
        const roomId = req.params.id;
        const room = await roomService.getRoomById(roomId);

        res.status(StatuseCodes.OK).json({ message: room });
    }


    async getAllRooms(req, res, next) {
        let page = req.query.page;
        const rooms = await roomService.getAllRooms(page);

        res.status(StatuseCodes.OK).json({ message: rooms });
    }


    async getHotelByRoomId(req, res, next) {
        const roomId = req.params.id;
        const hotel = await roomService.getHotelByRoomId(roomId);

        res.status(StatuseCodes.OK).json({ message: hotel });
    }


    async getBookingsByRoomId(req, res, next) {
        const roleId = req.params.id;
        const bookings = await roomService.getBookingsByRoomId(roleId);

        res.status(StatuseCodes.OK).json({ message: bookings });
    }


    async deleteRoom(req, res, next) {
        const roomId = req.params.id;
        const numberOfRooms = await roomService.deleteRoom(roomId);

        res.status(StatuseCodes.OK).json({ message: numberOfRooms });
    }

}

module.exports = new RoomController();