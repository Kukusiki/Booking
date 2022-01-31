const roomModels = require('../models/room');
const pageSize = require('../const').PAGE_SIZE;

class RoomRepository {

    async create(room) {
        const result = await roomModels.create(room);
        return result;
    }

    async update({ roomId, file }) {
        const result = await roomModels.update({ photo: file.path }, { where: { id: roomId } });
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

    async delete(id, trans) {
        const result = await roomModels.destroy({ where: { id }, transaction: trans });
        return result;
    }
};

module.exports = new RoomRepository();