const Joi = require('joi');

const ReviewScheme = {
    create: Joi.object().keys({
        message: Joi.string(),
        rate: Joi.number()
    })
}

module.exports = ReviewScheme;