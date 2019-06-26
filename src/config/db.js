const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'host',
});

module.exports = {
    Sequelize,
    sequelize
};