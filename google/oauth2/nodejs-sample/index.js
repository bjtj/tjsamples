// index.js

require('dotenv').config({ path: '.env' });

/*  EXPRESS */

const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
}));

app.get('/', function(req, res) {
  console.log(JSON.stringify(req.session));
  res.render('pages/auth');
});

/*  PASSPORT SETUP  */

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => {
  // console.log(JSON.stringify(req.session));
  res.json(req.session.passport);
});

app.get('/error', (req, res) => {
  res.send("error logging in")
});

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

/*  Google AUTH  */

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'our-google-client-id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'our-google-client-secret';
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/google', 
        passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/error' }),
        function(req, res) {
          // Successful authentication, redirect success.
          res.redirect('/success');
        });

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));

