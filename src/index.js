const sequelize = require('./db');

const routes = require('./loader');
const seeds = require('./utils/seeds');
const consts = require('./const');
const hotelService = require('./services/hotelService');
const express = require('express');
const app = express();
const env = require('./env').admin;

async function start() {
    await sequelize.sync();
    await seeds.createRoles(consts.ADMIN_ROLE, consts.USER_ROLE);
    await seeds.addAdmin({ email: env.email, password: env.password })
    app.use(routes);


    app.listen(5000, () => console.log('Connection successful, to exit press ctrl + c'));

    let now = new Date();
    let time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 2, 0, 0, 0) - now;
    if (time < 0) {
        time += 24 * 60 * 60 * 1000; // it's after 2am, try 2am tomorrow.
    }
    setTimeout(async function() {
        await hotelService.getOldHotels();
        time += 24 * 60 * 60 * 1000;
    }, time);
}

start();

module.exports = app;