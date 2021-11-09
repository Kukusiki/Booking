const { Sequelize, DataTypes} = require('sequelize');

const userInfo = sequelize.define('user_info', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		field: 'id',
	},
	userID: {
		type: DataTypes.BIGINT,
		allowNull: false,
		field: 'user_id',
	},
	firstName: {
		type: DataTypes.STRING(50),
		field: 'first_name',
	},
	lastName: {
		type: DataTypes.STRING(50),
		field: 'last_name',
	},
	photo: {
		type: DataTypes.STRING,
		field: 'photo',
	},
}, 
{});

userInfo.sync();
console.log(userInfo === sequelize.models.userInfo);