const hotelModel = require('../models/hotel');

class HotelRepository {

    async create(name, photo, description) {
        const result = await hotelModel.create({ name, photo, description });
        return result;
    }

    async create(hotel) {
        const result = await hotelModel.create(hotel);
        return result;
    }

    async findAll() {
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