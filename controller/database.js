const Sequelize = require("sequelize");
module.exports = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "pandey",
    database: "movies",
});




