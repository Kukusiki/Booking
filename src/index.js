const sequelize = require('./db');

const routes = require('./loader');
const seeds = require('./utils/seeds');
const consts = require('./const');
const express = require('express');
const app = express();
const env = require('./env').admin;

async function start() {
    await sequelize.sync();
    await seeds.createRoles(consts.ADMIN_ROLE, consts.USER_ROLE);
    await seeds.addAdmin({ email: env.email, password: env.password })
    app.use(routes);

    app.listen(5000, () => console.log('Connection successful, to exit press ctrl + c'));
}

start();

module.exports = app;