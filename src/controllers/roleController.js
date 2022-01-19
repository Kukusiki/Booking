const roleService = require('../services/roleService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class RoleController {

    async addRole(req, res, next) {
        const role = req.body;
        await roleService.addRole(role);

        res.status(StatuseCodes.CREATED).json({ message: 'Role created successfully' });
    }


    async getRoleById(req, res, next) {
        const roleId = req.params.id;
        const role = await roleService.getRoleById(roleId);

        res.status(StatuseCodes.OK).json({ message: role });
    }


    async getAllRoles(req, res, next) {
        const role = await roleService.getAllRoles();

        res.status(StatuseCodes.OK).json({ message: role });
    }


    async getUserRoleByRoleId(req, res, next) {
        const roleId = req.params.id;
        const userRole = await roleService.getUserRoleByRoleId(roleId);

        res.status(StatuseCodes.OK).json({ message: userRole });
    }


    async deleteRole(req, res, next) {
        const roleId = req.params.id;
        const numberOfRoles = await roleService.deleteRole(roleId);

        res.status(StatuseCodes.OK).json({ message: numberOfRoles });
    }

}

module.exports = new RoleController();