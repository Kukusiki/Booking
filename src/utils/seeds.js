const roleRepository = require('../repositories/roleRepository');
const userRepository = require('../repositories/userRepository');
const userService = require('../services/userService');

class Seeds {

    async createRoles() {
        const roles = [].slice.call(arguments);

        roles.forEach(async name => {
            await roleRepository.findOrCreate({ where: { name: name } });
        });
    }


    async addAdmin(admin) {
        let user = await userRepository.findUserByEmail(admin.email);
        if (!user) {
            user = await userService.addUser(admin);
            await userService.addAdminByUserId(user.id);
        }
    }

}

module.exports = new Seeds();