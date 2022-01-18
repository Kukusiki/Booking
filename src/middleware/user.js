const user = require('../const').USER;

module.exports = (req, res, next) => {
    if (req.session.role == user) {
        next();
    } else {
        next(new Error('You are not an user'));
    }
};