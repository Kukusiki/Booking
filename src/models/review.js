const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const review = sequelize.define('reviews', {
	id: {
		type: Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		field: 'id',
	},
	hotelID: {
		type: Sequelize.BIGINT,
		allowNull: false,
		field: 'hotel_id',
	},
	userID: {
		type: Sequelize.BIGINT,
		allowNull: false,
		field: 'user_id',
	},
	message: {
		type: Sequelize.TEXT,
		field: 'message',
	},
	dateOfWriting: {
		type: Sequelize.DATE,
		field: 'date_of_writing',
	},
	rate: {
		type: Sequelize.INTEGER,
		field: 'rate',
	},
}, 
{});

module.exports = review;