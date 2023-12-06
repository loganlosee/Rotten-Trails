const User = require('./User');
const Trail = require('./Trail');
const Rating = require('./Rating');

user.hasMany(Rating, {
    foreignKey: 'email',
    onDelete: 'CASCADE'
    });

rating.belongsTo(User, {
    foreignKey: 'email'
    });

rating.hasMany(Trail, {
    foreignKey: 'trailName',
    onDelete: 'CASCADE'
    });

trail.belongsTo(Rating, {
    foreignKey: 'trailName'
    });

module.exports = { User, Trail, Rating };

