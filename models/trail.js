
// models/trail.js

module.exports = (sequelize, DataTypes) => {
    const Trail = sequelize.define('Trail', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Other trail attributes
    });
  
    // Trail associations or methods can be defined here
  
    return Trail;
  };


