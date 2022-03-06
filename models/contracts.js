const { DataTypes } = require('sequelize');
const db = require("../db");

const contracts = db.define("contracts", {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = contracts;