const StatuseCodes = require('http-status-codes').StatusCodes;

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;