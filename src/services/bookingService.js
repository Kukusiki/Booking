const bookingRepository = require('../repositories/bookingRepository');
const roomRepository = require('../repositories/roomRepository');
const userRepository = require('../repositories/userRepository');
const NotFoundError = require('../utils/notFoundError');

class BookingService {

    async addBooking(booking) {
        const room = await roomRepository.findRoomById(booking.roomId);
        if (!room) {
            throw new NotFoundError('Room not found');
        }

        const user = await userRepository.findUserById(booking.userId);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        const result = await bookingRepository.create(booking);
        return result;
    }


    async getBookingById(bookingId) {
        const result = await bookingRepository.findBookingById(bookingId);
        if (!result) {
            throw new NotFoundError('Booking not found');
        }
        return result;
    }


    async getAllBookings(page = 1) {
        const result = await bookingRepository.findAll(page);
        return result;
    }


    async getRoomByBookingId(bookingId) {
        const booking = await this.getBookingById(bookingId);
        const roomId = booking.roomId;

        const result = await roomRepository.findRoomById(roomId);
        if (!result) {
            throw new NotFoundError('Room not found');
        }
        return result;
    }


    async getUserByBookingId(bookingId) {
        const booking = await this.getBookingById(bookingId);
        const userId = booking.userId;

        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async deleteBooking(bookingId) {
        await this.getBookingById(bookingId);

        const result = await bookingRepository.delete(bookingId);
        return result;
    }

}

module.exports = new BookingService();