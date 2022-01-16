const Sequelize = require('sequelize');
const sequelize = require('../db');

const UserRole = sequelize.define('users_roles', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    roleId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'role_id',
    },
    userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'user_id',
    },
}, {});

module.exports = UserRole;