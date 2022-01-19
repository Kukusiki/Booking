const hotelService = require('../services/hotelService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class HotelController {

    async addHotel(req, res, next) {
        const hotel = req.body;
        await hotelService.addHotel(hotel);

        res.status(StatuseCodes.CREATED).json({ message: 'Hotel created successfully' });
    }


    async getHotelById(req, res, next) {
        const hotelId = req.params.id;
        const hotel = await hotelService.getHotelById(hotelId);

        res.status(StatuseCodes.OK).json({ message: hotel });
    }


    async getAllHotels(req, res, next) {
        let page = req.query.page;
        if (!page) {
            page = 1;
        }
        const hotels = await hotelService.getAllHotels(page);

        res.status(StatuseCodes.OK).json({ message: hotels });
    }


    async getRoomsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const rooms = await hotelService.getRoomsByHotelId(hotelId);

        res.status(StatuseCodes.OK).json({ message: rooms });
    }


    async getFreeRoomsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const rooms = await hotelService.getFreeRoomsByHotelId(hotelId);

        res.status(StatuseCodes.OK).json({ message: rooms });
    }


    async getReviewsByHotelId(req, res, next) {
        const hotelId = req.params.id;
        const reviews = await hotelService.getReviewsByHotelId(hotelId);

        res.status(StatuseCodes.OK).json({ message: reviews });
    }


    async deleteHotel(req, res, next) {
        const hotelId = req.params.id;
        const numberOfHotels = await hotelService.deleteHotel(hotelId);

        res.status(StatuseCodes.OK).json({ message: numberOfHotels });
    }

}

module.exports = new HotelController();