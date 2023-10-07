const Sequelize = require("sequelize");

const connection = new Sequelize('guiadeperguntas','root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;
