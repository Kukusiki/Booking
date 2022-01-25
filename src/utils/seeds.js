const roleRepository = require('../repositories/roleRepository');
const userRepository = require('../repositories/userRepository');
const userService = require('../services/userService');

class Seeds {

    async createRoles() {
        const names = [].slice.call(arguments);

        names.forEach(async name => {
            const role = await roleRepository.findRoleByName(name);
            if (!role) {
                await roleRepository.create({ name: name });
            }
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