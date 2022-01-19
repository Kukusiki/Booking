const hotelRepository = require('../repositories/hotelRepository');
const roomRepository = require('../repositories/roomRepository');
const reviewRepository = require('../repositories/reviewRepository');
const NotFoundError = require('../utils/notFoundError');

class HotelService {

    async addHotel(hotel) {
        const result = await hotelRepository.create(hotel);
        return result;
    }


    async getHotelById(hotelId) {
        const result = await hotelRepository.findHotelById(hotelId);
        if (!result) {
            throw new NotFoundError('Hotel not found');
        }
        return result;
    }


    async getAllHotels(page) {
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


    async deleteHotel(hotelId) {
        await this.getHotelById(hotelId);

        const result = await hotelRepository.delete(hotelId);
        return result;
    }

}

module.exports = new HotelService();