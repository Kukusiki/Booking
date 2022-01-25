const userRepository = require('../repositories/userRepository');
const reviewRepository = require('../repositories/reviewRepository');
const bookingRepository = require('../repositories/bookingRepository');
const userInfoRepository = require('../repositories/userInfoRepository');
const userRoleRepository = require('../repositories/userRoleRepository');
const roleRepository = require('../repositories/roleRepository');
const NotFoundError = require('../utils/notFoundError');
const isUser = require('../const').USER_ROLE;
const isAdmin = require('../const').ADMIN_ROLE;

class UserService {

    async addUser(user) {
        const result = await userRepository.create(user);
        const role = await roleRepository.findRoleByName(isUser);
        await userRoleRepository.create({ roleId: role.id, userId: result.id });

        return result;
    }


    async addAdminByUserId(userId) {
        const user = await this.getUserById(userId);
        const role = await roleRepository.findRoleByName(isAdmin);
        await userRoleRepository.create({ roleId: role.id, userId: user.id });
    }


    async getUserById(userId) {
        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async getUserByEmail(email) {
        const result = await userRepository.findUserByEmail(email);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async getAllUsers(page = 1) {
        const result = await userRepository.findAll(page);
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


    async getUserRolesByUserId(userId) {
        await this.getUserById(userId);

        const result = await userRoleRepository.findUserRolesByUserId(userId);
        return result;
    }


    // async getUserRoleByUserId(userId) {
    //     const result = await this.getUserRolesByUserId(userId);
    //     return result[0];
    // }


    async getRolesByUserId(userId) {
        const userRoles = await this.getUserRolesByUserId(userId);
        const rolesId = userRoles.map((userRole) => userRole.roleId);

        const result = await Promise.all(rolesId.map(async(roleId) => await roleRepository.findRoleById(roleId)));

        return result;
    }


    // async getRoleByUserId(userId) {
    //     const userRole = await this.getUserRoleByUserId(userId);
    //     const roleId = userRole.roleId;

    //     const result = await roleRepository.findRoleById(roleId);
    //     return result;
    // }


    async deleteUser(userId) {
        await this.getUserById(userId);

        const result = await userRepository.delete(userId);
        return result;
    }

}

module.exports = new UserService();