module.exports = (sequelize, DataTypes) => {
	const hotels = sequelize.define('hotels', {
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
		photo: {
			type: DataTypes.STRING,
			field: 'photo',
		},
        description: {
            type: DataTypes.TEXT,
            field: 'description',
        },
	}, {});
	return hotels;
};