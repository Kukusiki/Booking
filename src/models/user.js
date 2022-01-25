const Sequelize = require('sequelize');
const sequelize = require('../db');
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
        field: 'email',
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
    },
}, {});

User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
});

User.prototype.validatePassword = function(password) {
    if (!password || !this.password) {
        return false;
    }
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;