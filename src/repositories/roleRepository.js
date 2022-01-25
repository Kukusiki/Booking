const roleModel = require('../models/role');

class RoleRepository {

    async create(role) {
        const result = await roleModel.create(role);
        return result;
    }

    async findAll() {
        const result = await roleModel.findAll();
        return result;
    }

    async findRoleById(id) {
        const result = await roleModel.findByPk(id);
        return result;
    }

    async findRoleByName(name) {
        const result = await roleModel.findOne({ where: { name } });
        return result;
    }

    async delete(id) {
        const result = await roleModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new RoleRepository();