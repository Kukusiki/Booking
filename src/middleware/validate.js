const Joi = require('joi');
const ValidationError = require('../utils/validationError');

module.exports = schema => {
    return (req, res, next) => {
        const error = schema.validate(req.body).error;
        if (error) {
            next(new ValidationError(error.details[0].message));
        } else {
            next();
        }
    };
};