const { Sequelize, sequelize } = require('../config/db');

const Equipe = sequelize.define('equipe', {
    firstname: {
        type: Sequelize.STRING
    },
        lastname: {
        type: Sequelize.STRING
    },
        age: {
        type: Sequelize.INTEGER
    }
});

module.exports = Equipe;