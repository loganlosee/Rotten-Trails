const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Trail extends Model {}

Trail.init(
  {
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'trail',
  }
);

module.exports = Trail;
