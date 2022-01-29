const Joi = require('joi');

const HotelScheme = {
    create: Joi.object().keys({
        name: Joi.string(),
        description: Joi.string()
    }),
    update: Joi.object().keys({
        photo: Joi.string()
    })
}

module.exports = HotelScheme;