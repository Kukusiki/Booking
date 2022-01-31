const userService = require('../services/userService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class UserController {

    async addUser(req, res, next) {
        const user = req.body;
        await userService.addUser(user);

        res.status(StatuseCodes.CREATED).json({ message: 'User created successfully' });
    }


    async addAdminByUserId(req, res, next) {
        const userId = req.params.id;
        await userService.addAdminByUserId(userId);

        res.status(StatuseCodes.CREATED).json({ message: 'Admin created successfully' });
    }


    async getUserById(req, res, next) {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);

        res.status(StatuseCodes.OK).json({ message: user });
    }


    async getAllUsers(req, res, next) {
        let page = req.query.page;
        const users = await userService.getAllUsers(page);

        res.status(StatuseCodes.OK).json({ message: users });
    }


    async getBookingsByUserId(req, res, next) {
        const userId = req.params.id;
        const booking = await userService.getBookingsByUserId(userId);

        res.status(StatuseCodes.OK).json({ message: booking });
    }


    async getReviewsByUserId(req, res, next) {
        const userId = req.params.id;
        const reviews = await userService.getReviewsByUserId(userId);

        res.status(StatuseCodes.OK).json({ message: reviews });
    }


    async getUserInfoByUserId(req, res, next) {
        const userId = req.params.id;
        const userInfo = await userService.getUserInfoByUserId(userId);

        res.status(StatuseCodes.OK).json({ message: userInfo });
    }


    async getUserRoleByUserId(req, res, next) {
        const userId = req.params.id;
        const userRole = await userService.getUserRoleByUserId(userId);

        res.status(StatuseCodes.OK).json({ message: userRole });
    }


    async getUsers(req, res, next) {
        const result = await userService.getUsers();

        res.status(StatuseCodes.OK).json({ message: result });
    }


    async deleteUser(req, res, next) {
        const userId = req.params.id;
        const numberOfUsers = await userService.deleteUser(userId);

        res.status(StatuseCodes.OK).json({ message: numberOfUsers });
    }

}

module.exports = new UserController();