const User = require('./user');
const UserInfo = require('./userInfo');
const UserRole = require('./userRole');
const Role = require('./role');
const Room = require('./room');
const Review = require('./review');
const Hotel = require('./hotel');
const Booking = require('./booking');


User.hasOne(UserInfo, { foreignKey: 'userID' });
User.hasMany(Booking, { foreignKey: 'userID' });
User.hasMany(Review, { foreignKey: 'userID' });

User.belongsToMany(Role, { through: UserRole, foreignKey: 'userID' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleID' });

Hotel.hasMany(Room, { foreignKey: 'hotelID' });
Hotel.hasMany(Review, { foreignKey: 'hotelID' });

Room.hasMany(Booking, { foreignKey: 'roomID' });