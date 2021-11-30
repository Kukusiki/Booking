const User = require('./user');
const UserInfo = require('./userInfo');
const UserRole = require('./userRole');
const Role = require('./role');
const Room = require('./room');
const Review = require('./review');
const Hotel = require('./hotel');
const Booking = require('./booking');

//user <- userInfo
User.hasOne(UserInfo, { foreignKey: 'user_id' });
UserInfo.belongsTo(User, { foreignKey: 'user_id' });

//user <- booking
User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

//user <- review
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });



//user <- userRole -> role
User.belongsToMany(Role, { through: UserRole, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'role_id' });



//hotel <- room
Hotel.hasMany(Room, { foreignKey: 'hotel_id' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

//hotel <- review
Hotel.hasMany(Review, { foreignKey: 'hotel_id' });
Review.belongsTo(Hotel, { foreignKey: 'hotel_id' });



//room <- booking
Room.hasMany(Booking, { foreignKey: 'room_id' });
Booking.belongsTo(Room, { foreignKey: 'room_id' });


module.exports = {
    User,
    UserInfo,
    UserRole,
    Role,
    Room,
    Review,
    Hotel,
    Booking
};