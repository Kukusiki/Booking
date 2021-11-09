Users.associate = function (models) {
    users.hasOne(models.userInfo, {
        foreignKey: 'user_id',
    });
};

//+++