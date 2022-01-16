const code = require('http-status-codes').StatusCodes;

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = code.NOT_FOUND;
    }
}

module.exports = NotFoundError;