const sequelize = require('./db');

const routes = require('./loader');
const seeds = require('./utils/seeds');
const consts = require('./const');
const express = require('express');
const app = express();

async function start() {
    await sequelize.sync();
    seeds.createRoles(consts.ADMIN_ROLE, consts.USER_ROLE);
    seeds.addAdmin({ email: 'admin@mail.ru', password: 'admin' })
    app.use(routes);

    app.listen(5000, () => console.log('Connection successful, to exit press ctrl + c'));
}

start();

module.exports = app;