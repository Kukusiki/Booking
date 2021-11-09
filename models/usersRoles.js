const { Sequelize, DataTypes} = require('sequelize');

const usersRoles = sequelize.define('usersRoles', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		field: 'id',
	},
	roleID: {
		type: DataTypes.BIGINT,
		allowNull: false,
		field: 'role_id',
	},
	userID: {
		type: DataTypes.BIGINT,
		allowNull: false,
		field: 'user_id',
	},
}, 
{});

usersRoles.sync();
console.log(usersRoles === sequelize.models.usersRoles);