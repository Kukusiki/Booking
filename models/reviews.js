module.exports = (sequelize, DataTypes) => {
	const reviews = sequelize.define('reviews', {
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
        userID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'user_id',
		},
        message: {
            type: DataTypes.TEXT,
            field: 'message',
        },
        dateOfWriting: {
            type: DataTypes.DATE,
            field: 'date_of_writing',
        },
        rate: {
            type: DataTypes.INTEGER,
            field: 'rate',
        },
	}, {});
	return reviews;
};