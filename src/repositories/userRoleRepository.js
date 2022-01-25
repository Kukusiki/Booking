const userRoleModel = require('../models/userRole');

class UserRoleRepository {

    async create(userRole) {
        const result = await userRoleModel.create(userRole);
        return result;
    }

    async findAll() {
        const result = await userRoleModel.findAll();
        return result;
    }

    async findUserRoleById(id) {
        const result = await userRoleModel.findByPk(id);
        return result;
    }

    async findUserRolesByUserId(userId) {
        const result = await userRoleModel.findAll({ where: { userId } });
        return result;
    }

    async findUserRolesByRoleId(roleId) {
        const result = await userRoleModel.findAll({ where: { roleId } });
        return result;
    }

    async delete(id) {
        const result = await userRoleModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new UserRoleRepository();