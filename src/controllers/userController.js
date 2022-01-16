const userService = require('../services/userService');
const code = require('http-status-codes').StatusCodes;

class UserController {

    async addUser(req, res, next) {
        const user = req.body;
        await userService.addUser(user);

        res.status(code.CREATED).json({ message: 'User created successfully' });
    }


    async getUserById(req, res, next) {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);

        res.status(code.OK).json({ message: user });
    }


    async getAllUsers(req, res, next) {
        const users = await userService.getAllUsers();

        res.status(code.OK).json({ message: users });
    }


    async getBookingsByUserId(req, res, next) {
        const userId = req.params.id;
        const booking = await userService.getBookingsByUserId(userId);

        res.status(code.OK).json({ message: booking });
    }


    async getReviewsByUserId(req, res, next) {
        const userId = req.params.id;
        const reviews = await userService.getReviewsByUserId(userId);

        res.status(code.OK).json({ message: reviews });
    }


    async getUserInfoByUserId(req, res, next) {
        const userId = req.params.id;
        const userInfo = await userService.getUserInfoByUserId(userId);

        res.status(code.OK).json({ message: userInfo });
    }


    async getUserRoleByUserId(req, res, next) {
        const userId = req.params.id;
        const userRole = await userService.getUserRoleByUserId(userId);

        res.status(code.OK).json({ message: userRole });
    }


    async deleteUser(req, res, next) {
        const userId = req.params.id;
        const numberOfUsers = await userService.deleteUser(userId);

        res.status(code.OK).json({ message: numberOfUsers });
    }

}

module.exports = new UserController();