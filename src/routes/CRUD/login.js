const express = require('express');
const path = require("path");
const loginController = require(path.resolve("src","controllers","login"));
const routes = express.Router();


routes.get('/login', (req, res) => {
    res.render('login'); 
  });

routes.post("/login",loginController.fazerLogin);


  module.exports = routes;