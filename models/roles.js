module.exports = (sequelize, DataTypes) => {
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
	}, {});
	return roles;
};