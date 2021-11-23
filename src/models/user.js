const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true },
        field: 'email',
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
    },
}, {});

module.exports = User;