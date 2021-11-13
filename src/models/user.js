const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const user = sequelize.define('users', {
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
		field: 'email',
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		field: 'password',
	},
}, 
{});

module.exports = user;