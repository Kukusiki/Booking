const admin = require('../const').admin;

module.exports = (req, res, next) => {
    if (req.session.role == admin) {
        next();
    } else {
        next(new Error('You are not an admin'));
    }
};