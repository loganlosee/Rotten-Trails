// Example in a seed script (e.g., seed.js)

const sequelize = require('../config/connection');
const Trail = require('../models/Trail');
const trailSeedData = require('./seed-trails');

const seedDatabase = async () => {
  try {
    // Synchronize the model with the database
    await Trail.sync({ force: true });

    // Create sample trails
    await Trail.bulkCreate(trailSeedData);

    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Call the seedDatabase function
seedDatabase();
