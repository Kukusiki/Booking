const sequelize = require('../db');
const Sequelize = require('sequelize');
const hotelRepository = require('../repositories/hotelRepository');
const roomRepository = require('../repositories/roomRepository');
const reviewRepository = require('../repositories/reviewRepository');
const NotFoundError = require('../utils/notFoundError');
const BadRequestError = require('../utils/badRequestError');
const bookingRepository = require('../repositories/bookingRepository');

class HotelService {

    async addHotel(hotel) {
        const result = await hotelRepository.create(hotel);
        return result;
    }


    async addPhoto({ hotelId, file }) {
        await this.getHotelById(hotelId);
        if (!file) {
            throw new BadRequestError('File not found');
        }

        const result = await hotelRepository.update({ hotelId, file });
        return result;
    }


    async getHotelById(hotelId) {
        const result = await hotelRepository.findHotelById(hotelId);
        if (!result) {
            throw new NotFoundError('Hotel not found');
        }
        return result;
    }


    async getAllHotels(page = 1) {
        const result = await hotelRepository.findAll(page);
        return result;
    }


    async getRoomsByHotelId(hotelId) {
        await this.getHotelById(hotelId);

        const result = await roomRepository.findRoomsByHotelId(hotelId);
        return result;
    }


    async getFreeRoomsByHotelId(hotelId) {
        const hotelRooms = await this.getRoomsByHotelId(hotelId);

        let result = [];
        hotelRooms.forEach(hotel => {
            if (hotel.free) {
                result.push(hotel);
            }
        });

        return result;
    }


    async getReviewsByHotelId(hotelId) {
        await this.getHotelById(hotelId);

        const result = await reviewRepository.findReviewsByHotelId(hotelId);
        return result;
    }


    async getHotel(date) {
        const query = `select h.id, h.name, h.photo, h.description from booking.hotels h 
        join booking.reviews r on h.id = r.hotel_id 
        join booking.rooms rm on h.id = rm.hotel_id 
        join booking.bookings b on rm.id = b.room_id 
        where timestampdiff(month, b.createdAt, '${date}') = 0 
        group by h.id 
        having avg(r.rate) > 3 
        order by count(b.id) desc 
        limit 1;`;

        const result = await sequelize.query(
            query, {
                type: Sequelize.QueryTypes.SELECT
            });
        return result[0];
    }


    async getAllBookingByHotelId(hotelId) {
        const rooms = await roomRepository.findRoomsByHotelId(hotelId);
        let bookings = [];

        for (let i = 0; i < rooms.length; i++) {
            const room = rooms[i];
            const booking = await bookingRepository.findBookingsByRoomId(room.id)
            bookings = bookings.concat(booking);
        }

        return bookings;
    }


    async getOldHotels() {
        const hotels = await this.getAllHotels();
        let result = [];
        for (let i = 0; i < hotels.length; i++) {
            const hotel = hotels[i];
            const bookings = await this.getAllBookingByHotelId(hotel.id);

            let now = new Date();
            let last3month = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            last3month.setMonth(now.getMonth() - 3);

            let old = true;
            for (let j = 0;
                (j < bookings.length) && old; j++) {
                const booking = bookings[i];
                if (booking.endDate > last3month) {
                    old = false;
                }
            }

            if (old) {
                result.push(hotel);
            }
        }
        return result;
    }


    async deleteHotels(hotels) {
        for (let i = 0; i < hotels.length; i++) {
            await this.deleteHotel(hotels[i].id);
        }
    }


    async deleteHotel(hotelId) {
        await this.getHotelById(hotelId);

        const result = await hotelRepository.delete(hotelId);
        return result;
    }

}

module.exports = new HotelService();