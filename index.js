//commonJS modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
//this middleware needs to be setup before we do anything else!
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

//only in production
if (process.env.NODE_ENV === 'production') {
  //make sure that express serves production
  //assets

  //look at this place first - if there is
  //respond.
  app.use(express.static('client/build'));


  //Express will serve up index.html file
  //if it does not recognise the route.

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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
