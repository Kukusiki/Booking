const hotelService = require('../services/hotelService');
const code = require('http-status-codes').StatusCodes;

class HotelController {

    async addHotel(req, res, next) {
        const hotel = req.body;
        await hotelService.addHotel(hotel);

        res.status(code.CREATED).json({ message: 'Hotel created successfully' });
    }


    async getHotelById(req, res, next) {
        const hotelId = req.params.id;
        const hotel = await hotelService.getHotelById(hotelId);

        res.status(code.OK).json({ message: hotel });
    }


    async getAllHotels(req, res, next) {
        const hotels = await hotelService.getAllHotels();

        res.status(code.OK).json({ message: hotels });
    }


    async getRoomsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const rooms = await hotelService.getRoomsByHotelId(hotelId);

        res.status(code.OK).json({ message: rooms });
    }


    async getFreeRoomsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const rooms = await hotelService.getFreeRoomsByHotelId(hotelId);

        res.status(code.OK).json({ message: rooms });
    }


    async getReviewsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const reviews = await hotelService.getReviewsByHotelId(hotelId);

        res.status(code.OK).json({ message: reviews });
    }


    async deleteHotel(req, res, next) {
        const hotelId = req.params.id;
        const numberOfHotels = await hotelService.deleteHotel(hotelId);

        res.status(code.OK).json({ message: numberOfHotels });
    }

}

module.exports = new HotelController();