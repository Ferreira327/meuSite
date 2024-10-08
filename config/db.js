const Sequelize = require('sequelize');

const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'sequelize.sqlite',
        logging: false
});

module.exports = sequelize;