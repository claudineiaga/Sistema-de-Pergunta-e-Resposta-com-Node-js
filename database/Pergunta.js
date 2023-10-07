const Sequelize = require("sequelize");
const conection = require("./database");

const Pergunta = conection.define('perguntas',{
    titulo:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    } 
});

Pergunta.sync({force: false}).then(() =>{});

module.exports = Pergunta;