const admin = require('../const').ADMIN_ROLE;
const ForbiddenError = require('../utils/forbiddenError');

module.exports = (req, res, next) => {
    if (req.session.role == admin) {
        next();
    } else {
        next(new ForbiddenError('You are not an admin'));
    }
};