const userModel = require('../models/user');
const pageSize = require('../const').PAGE_SIZE;

class UserRepository {

    async create(user) {
        const result = await userModel.create(user);
        return result;
    }

    async findAll(page) {
        const { count, rows } = await userModel.findAndCountAll({
            offset: pageSize * (page - 1),
            limit: pageSize
        });

        return rows;
    }

    async findUserByEmail(email) {
        const result = await userModel.findOne({ where: { email } });
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