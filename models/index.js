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
  foreignKey: 'ratingId', // This foreign key should exist in the Trail model
  onDelete: 'CASCADE',
});

Trail.belongsTo(Rating, {
  foreignKey: 'ratingId',
  as: 'trailRatings',
});

module.exports = { User, Trail, Rating };

