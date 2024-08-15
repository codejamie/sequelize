const { DataTypes } = require("sequelize");
const SQLconnection = require("../db/connection.js")

const Author = SQLconnection.define("Author", {
    id: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Author;