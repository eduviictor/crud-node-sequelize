const { Sequelize, sequelize } = require('../config/db');

const Campeonato = sequelize.define('campeonato', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: Sequelize.STRING
    },
    nivel: {
        type: Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
});

module.exports = Campeonato;