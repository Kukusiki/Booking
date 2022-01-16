const userRoleRepository = require('../repositories/userRoleRepository');
const userRepository = require('../repositories/userRepository');
const roleRepository = require('../repositories/roleRepository');
const NotFoundError = require('../utils/notFoundError');

class UserRoleService {

    async addUserRole(userRole) {
        const user = await userRepository.findUserById(userRole.userId);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        const role = await roleRepository.findRoleById(userRole.roleId);
        if (!role) {
            throw new NotFoundError('Role not found');
        }

        const result = await userRoleRepository.create(userRole);
        return result;
    }


    async getUserRoleById(userRoleId) {
        const result = await userRoleRepository.findUserRoleById(userRoleId);
        if (!result) {
            throw new NotFoundError('UserRole not found');
        }
        return result;
    }


    async getAllUserRoles() {
        const result = await userRoleRepository.findAll();
        return result;
    }


    async getUserByUserRoleId(userRoleId) {
        const userRole = await this.getUserRoleById(userRoleId);
        const userId = userRole.userId;

        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async getRoleByUserRoleId(userRoleId) {
        const userRole = await this.getUserRoleById(userRoleId);
        const roleId = userRole.roleId;

        const result = await roleRepository.findRoleById(roleId);
        if (!result) {
            throw new NotFoundError('Role not found');
        }
        return result;
    }


    async deleteUserRole(userRoleId) {
        await this.getUserRoleById(userRoleId);

        const result = await userRoleRepository.delete(userRoleId);
        return result;
    }

}

module.exports = new UserRoleService();