const Room = require('../models/room');

class RoomRepository {

    async create(hotelId, photo, type, cost, free) {
        const result = await Room.create({ hotelId, photo, type, cost, free });
        return result;
    }

    async create(room) {
        const result = await Room.create(room);
        return result;
    }

    async findAll() {
        const result = await Room.findAll();
        return result;
    }

    async findRoomById(id) {
        const result = await Room.findAll({ where: { id } });
        return result;
    }

    async findRoomsByHotelId(hotelId) {
        const result = await Room.findAll({ where: { hotelId } });
        return result;
    }

    async delete(id) {
        const result = await Room.destroy({ where: { id } });
        return result;
    }
};

module.exports = new RoomRepository();