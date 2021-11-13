const user = require('./user');
const userInfo = require('./userInfo');
const userRole = require('./userRole');
const role = require('./role');
const room = require('./room');
const review = require('./review');
const hotel = require('./hotel');
const booking = require('./booking');


user.hasOne(userInfo, {foreignKey: 'userID'});
user.hasMany(booking, {foreignKey: 'userID'});
user.hasMany(review, {foreignKey: 'userID'});

user.belongsToMany(role, {through: userRole, foreignKey: 'userID'});
role.belongsToMany(user, {through: userRole, foreignKey: 'roleID'});

hotel.hasMany(room, {foreignKey: 'hotelID'});
hotel.hasMany(review, {foreignKey: 'hotelID'});

room.hasMany(booking, {foreignKey: 'roomID'});