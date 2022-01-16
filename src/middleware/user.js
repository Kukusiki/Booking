const user = require('../const').user;

module.exports = (req, res, next) => {
    if (req.session.role == user) {
        next();
    } else {
        next(new ForbiddenError('You are not an user'));
    }
};