module.exports = (sequelize, DataTypes) => {
	const booking = sequelize.define('booking', {
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
		roomID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'room_id',
		},
        startDate: {
            type: DataTypes.DATE,
			allowNull: false,
            field: 'start_date',
        },
        endDate: {
            type: DataTypes.DATE,
			allowNull: false,
            field: 'end_date',
        },
        cost: {
            type: DataTypes.DOUBLE,
			allowNull: false,
            field: 'cost',
        },
	}, {});
	return booking;
};