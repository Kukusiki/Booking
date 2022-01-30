const StatuseCodes = require('http-status-codes').StatusCodes;
const customEndpointService = require('../services/customEndpointService');

class CustomEndpointController {

    async getHotel(req, res, next) {
        const date = req.params.date;
        const result = await customEndpointService.getHotel(date);

        res.status(StatuseCodes.OK).json({ message: result });
    }


    async getUsers(req, res, next) {
        const result = await customEndpointService.getUsers();

        res.status(StatuseCodes.OK).json({ message: result });
    }

}

module.exports = new CustomEndpointController();