const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


rating.init(
  {
    user_rating: {
      type: DataTypes.boolean,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      primaryKey: true,
    },
    trail_name: {
        type: DataTypes.string,
        allowNull: false,
        primaryKey: false,
      }, 
    rating_location: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    },
},
  
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating',
  }
);

module.exports = rating;
