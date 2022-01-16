const hotelRepository = require('../repositories/hotelRepository');
const roomRepository = require('../repositories/roomRepository');

class HotelService {

    async addHotel(hotel) {
        const result = await hotelRepository.create(hotel);
        return result;
    }

    async getHotelById(hotelId) {
        const result = await hotelRepository.findHotelById(hotelId);
        return result;
    }

    async getAllHotels() {
        const result = await hotelRepository.findAll();
        return result;
    }

    async getRoomsByHotelId(hotelId) {
        const result = await roomRepository.findRoomsByHotelId(hotelId);
        return result;
    }

    //???
    async addRoomByHotelId(hotelId, photo, type, cost, free) {
        const result = await roomRepository.create(hotelId, photo, type, cost, free);
        return result;
    }

    async getFreeRoomsByHotelId(hotelId) {
        const hotelRooms = await this.getRoomsByHotelId(hotelId);
        let result = [];
        for (let i = 0; i < hotelRooms.length; i++) {
            if (hotelRooms[i].free) {
                result.push(hotelRooms[i]);
            }
        }
        return result;
    }

    async addReviewByHotelId(hotelId) {
        //loading...
    }

    async getReviewByHotelId(hotelId) {
        //loading...
    }

    async deleteHotel(hotelId) {
        const result = await hotelRepository.delete(hotelId);
        return result;
    }
}

module.exports = new HotelService();