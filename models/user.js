// models/user.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust the path

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User associations or methods can be defined here

module.exports = User;
