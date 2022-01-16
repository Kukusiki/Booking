const code = require('http-status-codes').StatusCodes;

module.exports = (error, req, res, next) => {
    res.status(error.status || code.INTERNAL_SERVER_ERROR).json({ message: error.message });
};