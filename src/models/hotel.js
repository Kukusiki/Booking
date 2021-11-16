const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const Hotel = sequelize.define('hotels', {
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
    photo: {
        type: Sequelize.STRING,
        field: 'photo',
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description',
    },
}, {});

module.exports = Hotel;