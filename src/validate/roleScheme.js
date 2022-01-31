const Joi = require('joi');

const RoleScheme = {
    name: Joi.object().keys({
        name: Joi.string()
    })
}

module.exports = RoleScheme;