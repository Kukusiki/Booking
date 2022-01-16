const roleRepository = require('../repositories/roleRepository');
const userRoleRepository = require('../repositories/userRoleRepository');

class RoleService {

    async addRole(role) {
        const result = await roleRepository.create(role);
        return result;
    }


    async getRoleById(roleId) {
        const result = await roleRepository.findRoleById(roleId);
        if (!result) {
            throw new Error('Role not found');
        }
        return result;
    }


    async getAllRoles() {
        const result = await roleRepository.findAll();
        return result;
    }


    async getUserRoleByRoleId(roleId) {
        await this.getRoleById(roleId);

        const result = await userRoleRepository.findUserRoleByRoleId(roleId);
        return result;
    }


    async deleteRole(roleId) {
        await this.getRoleById(roleId);

        const result = await roleRepository.delete(roleId);
        return result;
    }

}

module.exports = new RoleService();