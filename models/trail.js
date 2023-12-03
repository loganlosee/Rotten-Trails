const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Trail = sequelize.define('Trail', {
  trail_name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trail_rating: {
    type: DataTypes.BOOLEAN, // Corrected from 'boolean' to 'BOOLEAN'
    allowNull: false,
    primaryKey: false,
  },
  elevationGain: {
    type: DataTypes.INTEGER,
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