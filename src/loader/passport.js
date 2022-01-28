const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const secret = require('../env').token.secret;

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    }, async(token, done) => {
        try {
            const user = { id: token.id, role: token.role };
            done(null, user);
        } catch (e) {
            done(e, false);
        }

    })
);

module.exports = passport;