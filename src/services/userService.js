const userRepository = require('../repositories/userRepository');
const reviewRepository = require('../repositories/reviewRepository');
const bookingRepository = require('../repositories/bookingRepository');
const userInfoRepository = require('../repositories/userInfoRepository');
const userRoleRepository = require('../repositories/userRoleRepository');

class UserService {

    async addUser(user) {
        const result = await userRepository.create(user);
        return result;
    }


    async getUserById(userId) {
        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new Error('User not found');
        }
        return result;
    }


    async getAllUsers() {
        const result = await userRepository.findAll();
        return result;
    }


    async getBookingsByUserId(userId) {
        await this.getUserById(userId);

        const result = await bookingRepository.findBookingsByUserId(userId);
        return result;
    }


    async getReviewsByUserId(userId) {
        await this.getUserById(userId);

        const result = await reviewRepository.findReviewsByUserId(userId);
        return result;
    }


    async getUserInfoByUserId(userId) {
        await this.getUserById(userId);

        const result = await userInfoRepository.findUserInfoByUserId(userId);
        return result;
    }


    async getUserRoleByUserId(userId) {
        await this.getUserById(userId);

        const result = await userRoleRepository.findUserRoleByUserId(userId);
        return result;
    }


    async deleteUser(userId) {
        await this.getUserById(userId);

        const result = await userRepository.delete(userId);
        return result;
    }

}

module.exports = new UserService();