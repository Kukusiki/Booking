const StatuseCodes = require('http-status-codes').StatusCodes;

class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.FORBIDDEN;
    }
}

module.exports = ForbiddenError;