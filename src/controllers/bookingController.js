const bookingService = require('../services/bookingService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class BookingController {

    async addBooking(req, res, next) {
        const booking = req.body;
        await bookingService.addBooking(booking);

        res.status(StatuseCodes.CREATED).json({ message: 'Booking created successfully' });
    }


    async getBookingById(req, res, next) {
        const bookingId = req.params.id;
        const booking = await bookingService.getBookingById(bookingId);

        res.status(StatuseCodes.OK).json({ message: booking });
    }


    async getAllBookings(req, res, next) {
        let page = req.query.page;
        const booking = await bookingService.getAllBookings(page);

        res.status(StatuseCodes.OK).json({ message: booking });
    }


    async getRoomByBookingId(req, res, next) {
        const bookingId = req.params.id;
        const room = await bookingService.getRoomByBookingId(bookingId);

        res.status(StatuseCodes.OK).json({ message: room });
    }


    async getUserByBookingId(req, res, next) {
        const bookingId = req.params.id;
        const user = await bookingService.getUserByBookingId(bookingId);

        res.status(StatuseCodes.OK).json({ message: user });
    }


    async deleteBooking(req, res, next) {
        const bookingId = req.params.id;
        const numberOfBookings = await bookingService.deleteBooking(bookingId);

        res.status(StatuseCodes.OK).json({ message: numberOfBookings });
    }

}

module.exports = new BookingController();