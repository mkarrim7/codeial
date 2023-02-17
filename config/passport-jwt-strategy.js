const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User=require('../models/userdetails');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'codeial';

passport.use(new JwtStrategy(opts, function(jwtPayLoad, done) {
    console.log("jwt",jwtPayLoad);
    User.findById(jwtPayLoad._id, function(err, user) {
        if (err) {
            console.log("Error in finding user from JWT");
            return;
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;