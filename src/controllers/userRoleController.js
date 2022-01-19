const userRoleService = require('../services/userRoleService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class UserRoleController {

    async addUserRole(req, res, next) {
        const userRole = req.body;
        await userRoleService.addUserRole(userRole);

        res.status(StatuseCodes.CREATED).json({ message: 'UserRole created successfully' });
    }


    async getUserRoleById(req, res, next) {
        const userRoleId = req.params.id;
        const userRole = await userRoleService.getUserRoleById(userRoleId);

        res.status(StatuseCodes.OK).json({ message: userRole });
    }


    async getAllUserRoles(req, res, next) {
        const userRoles = await userRoleService.getAllUserRoles();

        res.status(StatuseCodes.OK).json({ message: userRoles });
    }


    async getUserByUserRoleId(req, res, next) {
        const userRoleId = req.params.id;
        const user = await userRoleService.getUserByUserRoleId(userRoleId);

        res.status(StatuseCodes.OK).json({ message: user });
    }


    async getRoleByUserRoleId(req, res, next) {
        const userRoleId = req.params.id;
        const role = await userRoleService.getRoleByUserRoleId(userRoleId);

        res.status(StatuseCodes.OK).json({ message: role });
    }


    async deleteUserRole(req, res, next) {
        const userRoleId = req.params.id;
        const numberOfUserRoles = await userRoleService.deleteUserRole(userRoleId);

        res.status(StatuseCodes.OK).json({ message: numberOfUserRoles });
    }

}

module.exports = new UserRoleController();