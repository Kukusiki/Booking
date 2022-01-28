const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: {
        name: process.env.DB_NAME || 'booking',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || '1111',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || '3306'
    },
    admin: {
        email: process.env.ADMIN_EMAIL || 'aaa',
        password: process.env.ADMIN_PASS || 'aaa'
    },
    token: {
        secret: process.env.SECRET || 'aaa'
    }
};