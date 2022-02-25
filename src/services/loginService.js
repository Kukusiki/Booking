const jwt = require('jsonwebtoken');
const userService = require('./userService');
const BadRequestError = require('../utils/badRequestError');
const secretToken = require('../env').token.secret;

class LoginService {

    async login(email, password) {
        const user = await userService.getUserByEmail(email);
        if (!user.validatePassword(password)) {
            throw new BadRequestError('Invalid password');
        }

        const roles = await userService.getRolesByUserId(user.id);
        const names = roles.map((role) => role.name);
        const token = jwt.sign({ id: user.id, role: names }, secretToken, { expiresIn: '1h' });

        return token;
    }

}

module.exports = new LoginService();