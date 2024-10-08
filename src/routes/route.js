const path = require('path');
const express = require('express');
const Home = require(path.resolve("src","routes","CRUD","home"));
const Login = require(path.resolve("src","routes","CRUD","login"));
const Post = require(path.resolve("src","routes","CRUD","post"));
const Admin = require(path.resolve("src","routes","CRUD","admin"));
const Video = require(path.resolve("src","routes","CRUD","video"));
const cookieParser = require('cookie-parser');


const routes = (app) => {

// Define o EJS como mecanismo de visualização
    app.set('view engine', 'ejs');

    app.use(express.urlencoded({ extended: true })); 

    

    app.use(cookieParser());


// Define o diretório onde as views estão localizadas
    app.set('views', path.resolve('src','views')); 

    app.use(express.static(path.resolve('public'))); 

    app.use(Video);
    app.use(Home);
    app.use(Post);
    app.use(Admin);
    app.use(Login);

};

module.exports = routes;