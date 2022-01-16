const sequelize = require('./db');
sequelize.sync();

const routes = require('./loader');
const express = require('express');
const app = express();

async function start() {
    app.use(routes);
    app.listen(5000, () => console.log('Connection successful, to exit press ctrl + c'));
}

start();

module.exports = app;