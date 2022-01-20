const userInfoRepository = require('../repositories/userInfoRepository');
const userRepository = require('../repositories/userRepository');
const NotFoundError = require('../utils/notFoundError');
const BadRequestError = require('../utils/badRequestError');

class UserInfoService {

    async addUserInfo(userInfo) {
        const user = await userRepository.findUserById(userInfo.userId);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        const result = await userInfoRepository.create(userInfo);
        return result;
    }


    async addPhoto({ userInfoId, file }) {
        await this.getUserInfoById(userInfoId);
        if (!file) {
            throw new BadRequestError('File not found');
        }

        const result = await userInfoRepository.update({ userInfoId, file });
        return result;
    }


    async getUserInfoById(userInfoId) {
        const result = await userInfoRepository.findUserById(userInfoId);
        if (!result) {
            throw new NotFoundError('UserInfo not found');
        }
        return result;
    }


    async getAllUserInfos() {
        const result = await userInfoRepository.findAll();
        return result;
    }


    async getUserByUserInfoId(userInfoId) {
        const userInfo = await this.getUserInfoById(userInfoId);
        const userId = userInfo.userId;

        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async deleteUserInfo(userInfoId) {
        await this.getUserInfoById(userInfoId);

        const result = await userInfoRepository.delete(userInfoId);
        return result;
    }

}

module.exports = new UserInfoService();