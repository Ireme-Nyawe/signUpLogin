var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var dotenv = require('dotenv');
dotenv.config();

passport.use(new GoogleStrategy({
    clientID : process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, user);
  }
));