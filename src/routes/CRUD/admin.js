const express = require('express');
const path = require("path");
const routes = express.Router();
const auth = require(path.resolve("src","middlewares","auth"))


routes.get('/admin', auth,(req, res) => {
    res.render('admin'); 
  });

  routes.get('/criarPost', auth,(req, res) => {
    res.render('criarPost'); 
  });

  routes.get('/criarVideo', auth,(req, res) => {
    res.render('criarVideo'); 
  });


module.exports = routes;