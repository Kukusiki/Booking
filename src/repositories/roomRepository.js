const roomModels = require('../models/room');
const pageSize = require('../const').PAGE_SIZE;
const NotFoundError = require('../utils/notFoundError');

class RoomRepository {

    async create(room) {
        const result = await roomModels.create(room);
        return result;
    }

    async findAll(page) {
        const { count, rows } = await roomModels.findAndCountAll({
            offset: pageSize * (page - 1),
            limit: pageSize
        });

        return rows;
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