const Room = require('../models/room');
const Hotel = require('../models/hotel');

class roomRepository {

    async create(id, hotelID, photo, type, cost, free) {
        return await Room.create({ id: id, hotelID: hotelID, photo: photo, type: type, cost: cost, free: free });
    }

    async create(room) {
        return await Room.create(room);
    }

    async findById(id) {
        return await Room.findById({ where: { id: id } });
    }

    async findAll() {
        return await Room.findAll;
    }

    async findHotelByRoomId(hotelId) {
        return await Hotel.findById(hotelId);
    }

    async deleteById(id) {
        return await Room.destroy({ where: { id: id } });
    }
};

module.exports = new roomRepository();