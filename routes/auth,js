// routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('../middleware/passport');  // Load the passport middleware

// Example login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/api/auth/success',  // Redirect on success
  failureRedirect: '/api/auth/failure'   // Redirect on failure
}));

module.exports = router;
