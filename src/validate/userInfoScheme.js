const Joi = require('joi');

const UserInfoScheme = {
    create: Joi.object().keys({
        firstName: Joi.string()
            .max(50),
        lastName: Joi.string()
            .max(50)
    }),
    update: Joi.object().keys({
        photo: Joi.string()
    })
}

module.exports = UserInfoScheme;