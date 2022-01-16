const userModel = require('../models/user');

class UserRepository {

    async create(user) {
        const result = await userModel.create(user);
        return result;
    }

    async findAll() {
        const result = await userModel.findAll();
        return result;
    }

    async findUserById(id) {
        const result = await userModel.findByPk(id);
        return result;
    }

    async delete(id) {
        const result = await userModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new UserRepository();