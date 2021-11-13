const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const room = sequelize.define('rooms', {
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
	photo: {
		type: Sequelize.STRING,
		field: 'photo',
	},
	type: {
		type: Sequelize.INTEGER,
		field: 'type',
	},
	cost: {
		type: Sequelize.DOUBLE,
		field: 'cost',
	},
	free: {
		type: Sequelize.BOOLEAN,
		field: 'free',
	},
}, 
{});

module.exports = room;