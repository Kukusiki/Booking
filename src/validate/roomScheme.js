const Joi = require('joi');

const RoomScheme = {
    create: Joi.object().keys({
        type: Joi.number(),
        cost: Joi.number(),
        free: Joi.boolean()
    }),
    update: Joi.object().keys({
        photo: Joi.string()
    })
}

module.exports = RoomScheme;