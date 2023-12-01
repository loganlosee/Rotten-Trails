const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Trail = sequelize.define('Trail', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  length: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Trail;
