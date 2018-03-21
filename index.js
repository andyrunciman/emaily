//commonJS modules
const express = require("express");
//ES2015 modules
//import express from 'express'
const app = express();
//we could have several of these in an app - normally use one
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
//route handler //get watches for / route
//app.  get post put delete patch

const PORT = process.env.PORT || 5000;
//heroku can inject data into env. Look at the env and check for port

app.listen(PORT);
