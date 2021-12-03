const Room = require('../repositories/roomRepository');
const Hotel = require('./hotelService');

class RoomService {

    async addRoom(room) {
        const result = await Room.create(room);
        return result;
    }

    async getRoomById(id) {
        const result = await Room.findRoomById(id);
        return result;
    }

    async getAllRooms() {
        const result = await Room.findAll();
        return result;
    }

    async getHotelByRoomlId(roomId) {
        const hotelId = (await Room.findRoomById(roomId)).hotelId;
        const result = await Hotel.getHotelById(hotelId);
        return result;
    }

    async addBookingByRoomId() {
        //loading...
    }

    async getBookingByRoomId(roomId) {
        //loading...
    }

    async deleteRoom(roomId) {
        const result = await Room.delete(roomId);
        return result;
    }

}

module.exports = new RoomService();