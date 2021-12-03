const roomModels = require('../models/room');

class RoomRepository {

    async create(room) {
        const result = await roomModels.create(room);
        return result;
    }

    async findAll() {
        const result = await roomModels.findAll();
        return result;
    }

    async findRoomById(id) {
        const result = await roomModels.findByPk(id);
        return result;
    }

    async findRoomsByHotelId(hotelId) {
        const result = await roomModels.findAll({ where: { hotelId } });
        return result;
    }

    async delete(id) {
        const result = await roomModels.destroy({ where: { id } });
        return result;
    }
};

module.exports = new RoomRepository();