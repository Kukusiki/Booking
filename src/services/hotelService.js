const Hotel = require('../repositories/hotelRepository');
const Room = require('../repositories/roomRepository');

class HotelService {

    async addHotel(name, photo, description) {
        const result = await Hotel.create(name, photo, description);
        return result;
    }

    async addHotel(hotel) {
        const result = await Hotel.create(hotel);
        return result;
    }

    async getHotelById(hotelId) {
        const result = await Hotel.findHotelById(hotelId);
        return result;
    }

    async getAllHotels() {
        const result = await Hotel.findAll();
        return result;
    }

    async getRoomsByHotelId(hotelId) {
        const result = await Room.findRoomsByHotelId(hotelId);
        return result;
    }

    async getFreeRoomsByHotelId(hotelId) {
        const hotelRooms = await getRoomsByHotelId(hotelId);
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
        const result = await Hotel.delete(hotelId);
        return result;
    }
}

module.exports = new HotelService();