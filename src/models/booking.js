const Sequelize = require('sequelize');
const sequelize = require('../db');

const Booking = sequelize.define('booking', {
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
    roomId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'room_id',
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'start_date',
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'end_date',
    },
    cost: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: 'cost',
    },
}, {});

module.exports = Booking;