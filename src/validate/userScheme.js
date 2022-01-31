const Joi = require('joi');

const UserScheme = {
    create: Joi.object().keys({
        email: Joi.string(),
        password: Joi.string()
    })
}

module.exports = UserScheme;