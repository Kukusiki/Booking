const Sequelize = require('sequelize');
const sequelize = require('../db');

const Role = sequelize.define('roles', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
    },
}, {});

module.exports = Role;