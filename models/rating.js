const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
  {
    thumbs_up: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'rating',
  }
);

module.exports = Rating;
