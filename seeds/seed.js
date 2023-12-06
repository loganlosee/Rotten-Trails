// Example in a seed script (e.g., seed.js)

const sequelize = require('../config/connection');
const { User, Trail } = require('../models');

const trailSeedData = require('./seed-trails');
const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
    // Synchronize the model with the database
    await Trail.sync({ force: true });

    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
      // Create sample trails
    await Trail.bulkCreate(trailSeedData);

    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();
