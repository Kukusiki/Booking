module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define('users', {
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: 'id',
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'email',
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'password',
		},
	}, {});
	return users;
};