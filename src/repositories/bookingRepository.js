const bookingModel = require('../models/booking');
const pageSize = require('../const').PAGE_SIZE;
const NotFoundError = require('../utils/notFoundError');

class BookingRepository {

    async create(booking) {
        const result = await bookingModel.create(booking);
        return result;
    }

    async findAll(page) {
        const { count, rows } = await bookingModel.findAndCountAll({
            offset: pageSize * (page - 1),
            limit: pageSize
        });

        return rows;
    }

    async findBookingById(id) {
        const result = await bookingModel.findByPk(id);
        return result;
    }

    async findBookingsByUserId(userId) {
        const result = await bookingModel.findAll({ where: { userId } });
        return result;
    }

    async findBookingsByRoomId(roomId) {
        const result = await bookingModel.findAll({ where: { roomId } });
        return result;
    }

    async delete(id) {
        const result = await bookingModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new BookingRepository();