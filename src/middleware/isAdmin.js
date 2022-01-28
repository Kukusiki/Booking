const admin = require('../const').ADMIN_ROLE;
const ForbiddenError = require('../utils/forbiddenError');

module.exports = (req, res, next) => {
    if (req.user.role.includes(admin)) {
        next();
    } else {
        next(new ForbiddenError('Access denied'));
    }
};