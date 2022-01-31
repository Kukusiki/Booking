const StatuseCodes = require('http-status-codes').StatusCodes;

class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = InternalServerError;