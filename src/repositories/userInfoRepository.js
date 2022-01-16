const userInfoModel = require('../models/userInfo');

class UserInfoRepository {

    async create(userInfo) {
        const result = await userInfoModel.create(userInfo);
        return result;
    }

    async findAll() {
        const result = await userInfoModel.findAll();
        return result;
    }

    async findUserInfoById(id) {
        const result = await userInfoModel.findByPk(id);
        return result;
    }

    async findUserInfoByUserId(userId) {
        const result = await userInfoModel.findAll({ where: { userId } });
        return result;
    }

    async delete(id) {
        const result = await userInfoModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new UserInfoRepository();