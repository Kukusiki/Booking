const Sequelize = require('sequelize');
const sequelize = require('../db');

const Review = sequelize.define('reviews', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    hotelId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'hotel_id',
    },
    userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'user_id',
    },
    message: {
        type: Sequelize.TEXT,
        field: 'message',
    },
    rate: {
        type: Sequelize.INTEGER,
        field: 'rate',
    },
}, {
    createdAt: true
});

module.exports = Review;