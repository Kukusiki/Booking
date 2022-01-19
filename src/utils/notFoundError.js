const StatuseCodes = require('http-status-codes').StatusCodes;

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError;