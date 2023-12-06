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
  foreignKey: 'ratingId', // Adjusted to match the actual foreign key in Trail
  onDelete: 'CASCADE',
});

Trail.belongsTo(Rating, {
    foreignKey: 'rating_id',
    as: 'trailRatings',
  });

module.exports = { User, Trail, Rating };

