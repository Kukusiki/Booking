const StatuseCodes = require('http-status-codes').StatusCodes;

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.status = StatuseCodes.NOT_ACCEPTABLE;
    }
}

module.exports = ValidationError;