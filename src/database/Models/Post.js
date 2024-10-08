const Sequelize = require('sequelize');
const path = require('path');
const database = require(path.resolve("config","db"));

const Post = database.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    img:{
        type: Sequelize.JSON,
        allowNull: false
    }
    });

module.exports = Post;