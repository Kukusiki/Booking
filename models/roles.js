const { Sequelize, DataTypes} = require('sequelize');

const roles = sequelize.define('roles', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		field: 'id',
	},
	name: {
		type: DataTypes.STRING,
		field: 'name',
	},
}, 
{});

roles.sync();
console.log(roles === sequelize.models.roles);