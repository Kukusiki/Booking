module.exports = (sequelize, DataTypes) => {
	const rooms = sequelize.define('rooms', {
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: 'id',
		},
		hotelID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'hotel_id',
		},
        photo: {
			type: DataTypes.STRING,
			field: 'photo',
		},
        type: {
            type: DataTypes.INTEGER,
			field: 'type',
        },
        cost: {
            type: DataTypes.DOUBLE,
			field: 'cost',
        },
        free: {
            type: DataTypes.BOOLEAN,
            field: 'free',
        },
	}, {});
	return rooms;
};