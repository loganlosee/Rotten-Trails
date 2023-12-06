const sequelize = require('../config/connection');
const seedTrail = require('./trailData');
const seedRating = require('./ratingData');
// const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTrail();

  await seedRating();

  // await seedUser();

  process.exit(0);
};

seedAll();
