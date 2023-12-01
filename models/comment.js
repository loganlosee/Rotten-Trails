const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust the path

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;