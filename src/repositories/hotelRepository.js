const hotelModel = require('../models/hotel');
const pageSize = require('../const').PAGE_SIZE;
const NotFoundError = require('../utils/notFoundError');

class HotelRepository {

    async create(hotel) {
        const result = await hotelModel.create(hotel);
        return result;
    }

    async findAll(page) {
        if (page !== undefined) {
            const { count, rows } = await hotelModel.findAndCountAll({
                offset: pageSize * (page - 1),
                limit: pageSize
            });

            if (pageSize * (page - 1) > count) {
                throw new NotFoundError('There is nothing on this page');
            }

            return rows;
        }

        const result = await hotelModel.findAll();
        return result;
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