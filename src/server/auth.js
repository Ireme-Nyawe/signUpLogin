// Import necessary modules using ES module syntax
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configure Passport to use the Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback: true
  },
  (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the sessions
passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
