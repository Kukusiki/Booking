const StatuseCodes = require('http-status-codes').StatusCodes;

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = NotFoundError;