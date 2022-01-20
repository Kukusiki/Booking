const hotelModel = require('../models/hotel');
const pageSize = require('../const').PAGE_SIZE;

class HotelRepository {

    async create(hotel) {
        const result = await hotelModel.create(hotel);
        return result;
    }

    async update({ hotelId, file }) {
        const result = await hotelModel.update({ photo: file.path }, { where: { id: hotelId } });
        return result;
    }

    async findAll(page) {
        const { count, rows } = await hotelModel.findAndCountAll({
            offset: pageSize * (page - 1),
            limit: pageSize
        });

        return rows;
    }

    async findHotelById(id) {
        const result = await hotelModel.findByPk(id);
        return result;
    }

    async delete(id) {
        const result = await hotelModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new HotelRepository();