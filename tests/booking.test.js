const bookingService = require('../src/services/bookingService');
const NotFoundError = require('../src/utils/notFoundError');

test('Good get booking by Id', () => {
    bookingService.getBookingById(10).then(result => {
        expect(result.id).toBe(10);
    });
});

test('In get booking, Id not found', () => {
    bookingService.getBookingById(100).catch(result => {
        expect(result.id).toThrow(NotFoundError);
    });
});



test('Good add booking', () => {
    const booking = {
        userId: 11,
        roomId: 2,
        startDate: '2025-01-23',
        endDate: '2025-01-29'
    }
    bookingService.addBooking(booking).then(result => {
        expect(result).toBe(booking);
    });
});

test('In add booking, room not found', () => {
    const booking = {
        userId: 11,
        roomId: 9,
        startDate: '2025-01-23',
        endDate: '2025-01-29'
    }
    bookingService.addBooking(booking).catch(result => {
        expect(result).toThrow(NotFoundError);
    });
});



test('Good delete booking by Id', () => {
    bookingService.deleteBooking(10).then(result => {
        expect(result).toBe(1);
    });
});

test('In delete booking, Id not found', () => {
    bookingService.deleteBooking(100).catch(result => {
        expect(result).toThrow(NotFoundError);
    });
});