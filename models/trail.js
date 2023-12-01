const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


trail.init(
  {
    trail_name: {
      type: DataTypes.string,
      allowNull: false,
      primaryKey: true,
    },
    elevation: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      primaryKey: true,
    },
    user_rating: {
      type: DataTypes.string,
      allowNull: true,
      primaryKey: false,
    },  
    Trail_location: {
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
    modelName: 'trail',
  }
);

module.exports = trail;
