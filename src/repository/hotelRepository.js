const Hotel = require('../models/hotel');
const Room = require('../models/room');

class hotelRepository {
    async create(id, name, photo, description) {
        return await Hotel.create({ id: id, name: name, photo: photo, description: description });
    }

    async create(hotel) {
        return await Hotel.create(hotel);
    }

    async findById(id) {
        return await Hotel.findById({ where: { id: id } });
    }

    async findAll() {
        return await Hotel.findAll;
    }

    async findAllRooms(id) {
        return await Room.findAll({ where: { hotelID: id } });
    }

    async deleteById(id) {
        return await Hotel.destroy({ where: { id: id } });
    }
};

module.exports = new hotelRepository();