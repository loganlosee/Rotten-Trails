const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Rating = sequelize.define('rating', {
  rating: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    primaryKey: true,
  },
  trail_name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Adding timestamps for createdAt and updatedAt
});

module.exports = Rating;
