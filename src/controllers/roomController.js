const roomService = require('../services/roomService');
const hotelService = require('../services/hotelService');

class RoomController {

    async addRoom(req, res, next) {
        try {
            const room = req.param;
            const hotel = await hotelService.getHotelById(room.hotelId);
            if (!hotel) {
                return next(new AppError('Hotel not found', 404));
            }

            await roomService.addRoom(hotel);
            res.json({ message: 'Room created successfully', status: 201 });

        } catch (err) {
            next(err);
        }
    }

    async getRoomById(req, res, next) {
        try {
            const roomId = req.param;
            const room = await roomService.getRoomById(roomId);
            if (!room) {
                return next(new AppError('Room not found', 404));
            }
            res.json({ message: room, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async getAllRooms(req, res, next) {
        try {
            const rooms = await roomService.getAllRooms();
            res.json({ message: rooms, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async getHotelByRoomlId(req, res, next) {
        try {
            const roomId = req.param;
            if (!await roomService.getRoomById(roomId)) {
                return next(new AppError('Room not found', 404));
            }
            const hotel = roomService.getHotelByRoomlId(roomId);
            res.json({ message: hotel, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async addBookingByRoomId(req, res, next) {
        //loading...
    }

    async getBookingByRoomId(req, res, next) {
        //loading...
    }

    async deleteRoom(req, res, next) {
        try {
            const roomId = req.param;
            if (!await roomService.getRoomById(roomId)) {
                return next(new AppError('Room not found', 404));
            }
            const numberOfRooms = roomService.deleteRoom(roomId);
            res.json({ message: numberOfRooms, status: 200 });

        } catch (err) {
            next(err);
        }
    }

}

module.exports = new RoomController();