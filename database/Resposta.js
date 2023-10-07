const Sequelize = require("sequelize");
const conection = require("./database");

const Resposta = conection.define("respostas",{
    corpo:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    perguntaId:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}).then(() =>{});

module.exports = Resposta;