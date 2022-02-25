const nodemailer = require('nodemailer');
const env = require('../env').admin2;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

class SendMail {

    async send(email) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: env.email,
                pass: env.password,
            },
        });

        let result = await transporter.sendMail({
            from: 'Booking <' + env.email + '>',
            to: email,
            subject: 'Message from Booking',
            text: 'You have successfully registered.'
        });
    }

}


module.exports = new SendMail();