const Joi = require('joi');

const BookingScheme = {
    create: Joi.object().keys({
        userId: Joi.number(),
        roomId: Joi.number(),
        startDate: Joi.date()
            .custom(date => {
                return new Date(date);
            })
            .greater(new Date)
            .iso()
            .required(),
        endDate: Joi.date()
            .greater(Joi.ref('startDate'))
            .iso()
            .required()
    })
}

module.exports = BookingScheme;