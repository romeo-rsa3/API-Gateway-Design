// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');  // Import the auth route

// Load environment variables
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Set up the routes
app.use('/api/auth', authRoute);  // Route for authentication

// Server setup
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
