const Sequelize = require('sequelize');
const database = require('../../../config/db');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const User = database.define('users', {

    id:{
        type: Sequelize.UUID,
        primaryKey : true
    },
    user:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }

}, {
    hooks: {
            afterSync: async () => {
            try {
                const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
                await User.create({
                user: process.env.ADMIN_USER,
                password: hashedPassword // Certifique-se de armazenar senhas de forma segura (hashing)
                });}
                catch (error) {
                console.error('Erro ao criar usuário:', error);
                }
            }
          }
    })


module.exports = User;
