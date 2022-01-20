const roomRepository = require('../repositories/roomRepository');
const hotelRepository = require('../repositories/hotelRepository');
const bookingRepository = require('../repositories/bookingRepository');
const NotFoundError = require('../utils/notFoundError');
const BadRequestError = require('../utils/badRequestError');

class RoomService {

    async addRoom(room) {
        const hotel = await hotelRepository.findHotelById(room.hotelId);
        if (!hotel) {
            throw new NotFoundError('Hotel not found');
        }

        const result = await roomRepository.create(room);
        return result;
    }


    async addPhoto({ roomId, file }) {
        await this.getRoomById(roomId);
        if (!file) {
            throw new BadRequestError('File not found');
        }

        const result = await roomRepository.update({ roomId, file });
        return result;
    }


    async getRoomById(roomId) {
        const result = await roomRepository.findRoomById(roomId);
        if (!result) {
            throw new NotFoundError('Room not found');
        }
        return result;
    }


    async getAllRooms(page) {
        const result = await roomRepository.findAll(page);
        return result;
    }


    async getHotelByRoomId(roomId) {
        const room = await this.getRoomById(roomId);
        const hotelId = room.hotelId;

        const result = await hotelRepository.findHotelById(hotelId);
        if (!result) {
            throw new NotFoundError('Hotel not found');
        }
        return result;
    }


    async getBookingsByRoomId(roomId) {
        await this.getRoomById(roomId);

        const result = await bookingRepository.findBookingsByRoomId(roomId);
        return result;
    }


    async deleteRoom(roomId) {
        await this.getRoomById(roomId);

        const result = await roomRepository.delete(roomId);
        return result;
    }

}

module.exports = new RoomService();