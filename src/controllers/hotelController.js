const hotelService = require('../services/hotelService');

class HotelController {

    async addHotel(req, res, next) {
        try {
            const hotel = req.param;
            await hotelService.addHotel(hotel);
            res.json({ message: 'Hotel created successfully', status: 201 });

        } catch (err) {
            next(err);
        }
    }

    async getHotelById(req, res, next) {
        try {
            const hotelId = req.param;
            const hotel = await hotelService.getHotelById(hotelId);
            if (!hotel) {
                return next(new AppError('Hotel not found', 404));
            }
            res.json({ message: hotel, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async getAllHotels(req, res, next) {
        try {
            const hotels = await hotelService.getAllHotels();
            res.json({ message: hotels, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async getRoomsByHotelId(req, res, next) {
        try {
            const hotelId = req.param;
            if (!await hotelService.getHotelById(hotelId)) {
                return next(new AppError('Hotel not found', 404));
            }
            const rooms = hotelService.getRoomsByHotelId(hotelId);
            res.json({ message: rooms, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async addRoomByHotelId(req, res, next) {
        //???
    }

    async getFreeRoomsByHotelId(req, res, next) {
        try {
            const hotelId = req.param;
            if (!await hotelService.getHotelById(hotelId)) {
                return next(new AppError('Hotel not found', 404));
            }
            const rooms = hotelService.getFreeRoomsByHotelId(hotelId);
            res.json({ message: rooms, status: 200 });

        } catch (err) {
            next(err);
        }
    }

    async addReviewByHotelId(req, res, next) {
        //loading...
    }

    async getReviewByHotelId(req, res, next) {
        //loading...
    }

    async deleteHotel(req, res, next) {
        try {
            const hotelId = req.param;
            if (!await hotelService.getHotelById(hotelId)) {
                return next(new AppError('Hotel not found', 404));
            }
            const numberOfHotels = hotelService.deleteHotel(hotelId);
            res.json({ message: numberOfHotels, status: 200 });

        } catch (err) {
            next(err);
        }
    }

}

module.exports = new HotelController();