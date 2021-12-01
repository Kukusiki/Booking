const Hotel = require('../models/hotel');

class HotelRepository {

    async create(name, photo, description) {
        const result = await Hotel.create({ name, photo, description });
        return result;
    }

    async create(hotel) {
        const result = await Hotel.create(hotel);
        return result;
    }

    async findAll() {
        const result = await Hotel.findAll();
        return result;
    }

    async findHotelById(id) {
        const result = await Hotel.findAll({ where: { id } });
        return result;
    }

    async delete(id) {
        const result = await Hotel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new HotelRepository();