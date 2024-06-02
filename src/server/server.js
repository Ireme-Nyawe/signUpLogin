// Import necessary modules using ES module syntax
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import passport from './auth.js'; // Adjust the path accordingly
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Set up file and directory names for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to check if user is logged in
function isLogged(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// Middleware setup
app.use(express.static(path.join(__dirname, 'client')));
app.use(
  session({
    secret: 'anykeyterm',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/auth/google',passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/auth/google/callback',passport.authenticate('google', {successRedirect: '/auth/home',failureRedirect: '/auth/google/failure',})
);

app.get('/auth/home', isLogged, (req, res) => {
  var name = req.user.displayName;
  res.send(`Hello ${name}!`);
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Hey there, something went wrong. Try later!');
});

app.get('/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`App is running on: ${port}`);
});
