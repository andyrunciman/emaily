//commonJS modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
//this middleware needs to be setup before we do anything else!
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//connect to the database which is needed for the next two requires.
mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');

//set up session handling

//ES2015 modules
//import express from 'express'

//passport like a register - be aware that the google strategy is available

//we could have several of these in an app - normally use one
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });
//route handler //get watches for / route
//app.  get post put delete patch

const PORT = process.env.PORT || 5000;
//heroku can inject data into env. Look at the env and check for port
app.listen(PORT);
