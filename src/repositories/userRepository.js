const userModel = require('../models/user');
const pageSize = require('../const').PAGE_SIZE;
const NotFoundError = require('../utils/notFoundError');

class UserRepository {

    async create(user) {
        const result = await userModel.create(user);
        return result;
    }

    async findAll(page) {
        if (page !== undefined) {
            const { count, rows } = await userModel.findAndCountAll({
                offset: pageSize * (page - 1),
                limit: pageSize
            });

            if (pageSize * (page - 1) > count) {
                throw new NotFoundError('There is nothing on this page');
            }

            return rows;
        }

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