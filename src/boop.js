const User = require("./models/user");
const Sequelize = require('sequelize');

const us = User.create({ email: '123@mail.ru', password: '12345678' });
console.log(us.email);

//doesn't work =(