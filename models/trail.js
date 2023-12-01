const { DataTypes } = require('sequelize');

const sequelize = require('../config/config');

const Trail = sequelize.define('Trail', {
  trailName: {

const Trail = sequelize.define('Trail', {
  name: {

    type: DataTypes.STRING,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  rating: {
    type: DataTypes.boolean,
    primaryKey: false
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
