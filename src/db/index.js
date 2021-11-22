const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking', 'root', '1111', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});

module.exports = sequelize;