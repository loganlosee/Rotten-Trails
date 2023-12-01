const user = require('./user');
const trail = require('./trail');
const rating = require('./rating');

user.hasMany(rating, {
    foreignKey: 'email',
    onDelete: 'CASCADE'
    });

rating.belongsTo(user, {
    foreignKey: 'email'
    });

rating.hasMany(trail, {
    foreignKey: 'trailName',
    onDelete: 'CASCADE'
    });

trail.belongsTo(rating, {
    foreignKey: 'trailName'
    });

module.exports = { user, trail, rating };

