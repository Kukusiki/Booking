const bookingService = require('../services/bookingService');
const code = require('http-status-codes').StatusCodes;

class BookingController {

    async addBooking(req, res, next) {
        const booking = req.body;
        await bookingService.addHotel(booking);

        res.status(code.CREATED).json({ message: 'Booking created successfully' });
    }


    async getBookingById(req, res, next) {
        const bookingId = req.params.id;
        const booking = await bookingService.getBookingById(bookingId);

        res.status(code.OK).json({ message: booking });
    }


    async getAllBookings(req, res, next) {
        const booking = await bookingService.getAllBookings();

        res.status(code.OK).json({ message: booking });
    }


    async getRoomByBookingId(req, res, next) {
        const bookingId = req.params.id;
        const room = await bookingService.getRoomByBookingId(bookingId);

        res.status(code.OK).json({ message: room });
    }


    async getUserByBookingId(req, res, next) {
        const bookingId = req.params.id;
        const user = await bookingService.getUserByBookingId(bookingId);

        res.status(code.OK).json({ message: user });
    }


    async deleteBooking(req, res, next) {
        const bookingId = req.params.id;
        const numberOfBookings = await bookingService.deleteBooking(bookingId);

        res.status(code.OK).json({ message: numberOfBookings });
    }

}

module.exports = new BookingController();