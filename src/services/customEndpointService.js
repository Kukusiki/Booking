const sequelize = require('../db');
const Sequelize = require('sequelize');

class CustomEndpointService {

    async getHotel(date) {
        const query = `select h.id, h.name, h.photo, h.description from booking.hotels h 
        join booking.reviews r on h.id = r.hotel_id 
        join booking.rooms rm on h.id = rm.hotel_id 
        join booking.bookings b on rm.id = b.room_id 
        where timestampdiff(month, b.createdAt, '${date}') = 0 
        group by h.id 
        having avg(r.rate) > 3 
        order by count(b.id) desc 
        limit 1;`;

        const result = await sequelize.query(
            query, {
                type: Sequelize.QueryTypes.SELECT
            });
        return result[0];
    }


    async getUsers() {
        const query = `select us.id, us.email, us.password from booking.users us
        join booking.bookings b on us.id = b.user_id
        group by us.id, us.email, us.password
        having count(b.id) > 2
            and count(b.id) >= (
                select avg(t.count) from (select count(b.id) as count from booking.users us
                join booking.bookings b on us.id = b.user_id
                group by us.id) as t
            );`;

        const result = await sequelize.query(
            query, {
                type: Sequelize.QueryTypes.SELECT
            });
        return result;
    }

}

module.exports = new CustomEndpointService();