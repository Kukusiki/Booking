const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const UserRole = sequelize.define('users_roles', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    roleID: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'role_id',
    },
    userID: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'user_id',
    },
}, {});

module.exports = UserRole;