const loginService = require('../services/loginService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class LoginController {

    async login(req, res, next) {
        const user = req.body;
        const token = await loginService.login(user.email, user.password);

        res.status(StatuseCodes.OK).json({ token: token });
    }
}

module.exports = new LoginController();