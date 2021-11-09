const { Sequelize, Models} = require('sequelize');

models.users.hasOne(models.userInfo, {
    foreignKey: 'userID',
});

models.users.hasMany(models.booking, {
    foreignKey: 'userID',
    sourceKey: 'id',
});

models.users.hasMany(models.reviews, {
    foreignKey: 'userID',
    sourceKey: 'id',
});

models.users.belongsToMany(models.roles, {
    through: 'usersRoles'
});

models.roles.belongsToMany(models.users, {
    through: 'usersRoles'
});

models.hotels.hasMany(models.rooms, {
    foreignKey: 'hotelID',
    sourceKey: 'id',
});

models.hotels.hasMany(models.reviews, {
    foreignKey: 'hotelID',
    sourceKey: 'id',
});

models.rooms.hasMany(module.booking, {
    foreignKey: 'roomID',
    sourceKey: 'id',
});

models.sync();