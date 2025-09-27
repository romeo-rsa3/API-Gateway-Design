// passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios'); // For making requests to the backend

// Authenticate using Passport's LocalStrategy
passport.use(new LocalStrategy((username, password, done) => {
  axios.post('http://localhost:5000/api/auth/login', { username, password })
    .then(response => {
      if (response.data.success) {
        return done(null, response.data.user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err));
}));

module.exports = passport;
