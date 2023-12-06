const User = require('./User');
const Trail = require('./Trail');
const Rating = require('./Rating');

User.hasMany(Rating, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Rating.belongsTo(User, {
  foreignKey: 'userId',
});

Rating.hasMany(Trail, {
  foreignKey: 'userId', // Adjusted to match the actual foreign key in Trail
  onDelete: 'CASCADE',
});

Trail.belongsTo(Rating, {
  foreignKey: 'userId', // Adjusted to match the actual foreign key in Rating
  as: 'trailRatings',
});

module.exports = { User, Trail, Rating };

