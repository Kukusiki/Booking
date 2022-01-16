const admin = require('../const').admin;

module.exports = (req, res, next) => {
    if (req.session.role == admin) {
        next();
    } else {
        next(new ForbiddenError('You are not an admin'));
    }
};