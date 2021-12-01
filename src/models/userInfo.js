const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const UserInfo = sequelize.define('user_info', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'user_id',
    },
    firstName: {
        type: Sequelize.STRING(50),
        field: 'first_name',
    },
    lastName: {
        type: Sequelize.STRING(50),
        field: 'last_name',
    },
    photo: {
        type: Sequelize.STRING,
        field: 'photo',
    },
}, {});

module.exports = UserInfo;