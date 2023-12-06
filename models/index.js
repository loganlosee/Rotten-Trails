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
  foreignKey: 'ratingId',
  onDelete: 'CASCADE',
});

Trail.belongsTo(Rating, {
  foreignKey: 'ratingId',
  as: 'trailRatings',
});

module.exports = { User, Trail, Rating };

