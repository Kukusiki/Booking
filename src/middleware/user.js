const user = require('../const').USER_ROLE;
const ForbiddenError = require('../utils/forbiddenError');

module.exports = (req, res, next) => {
    if (req.user.role.includes(user, 0)) {
        next();
    } else {
        next(new ForbiddenError('You are not an user'));
    }
};