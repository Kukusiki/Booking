const userInfoService = require('../services/userInfoService');
const code = require('http-status-codes').StatusCodes;

class UserInfoController {

    async addUserInfo(req, res, next) {
        const userInfo = req.body;
        await userInfoService.addUserInfo(userInfo);

        res.status(code.CREATED).json({ message: 'UserInfo created successfully' });
    }


    async getUserInfoById(req, res, next) {
        const userInfoId = req.params.id;
        const userInfo = await userInfoService.getUserInfoById(userInfoId);

        res.status(code.OK).json({ message: userInfo });
    }


    async getAllUserInfos(req, res, next) {
        const userInfos = await userInfoService.getAllUserInfos();

        res.status(code.OK).json({ message: userInfos });
    }


    async getUserByUserInfoId(req, res, next) {
        const userInfoId = req.params.id;
        const user = await userInfoService.getUserByUserInfoId(userInfoId);

        res.status(code.OK).json({ message: user });
    }


    async deleteUserInfo(req, res, next) {
        const userInfoId = req.params.id;
        const numberOfUserInfos = await userInfoService.deleteUserInfo(userInfoId);

        res.status(code.OK).json({ message: numberOfUserInfos });
    }

}

module.exports = new UserInfoController();