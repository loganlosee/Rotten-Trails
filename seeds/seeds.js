const Trail = require('../models/trail');

const sampleTrails = [
  {
    trail_name: 'Trail 1',
    difficulty: 'Easy',
    trail_rating: true,
    elevationGain: 200,
    length: 2.5,
    description: 'A scenic and easy trail.',
  },
  {
    trail_name: 'Trail 2',
    difficulty: 'Moderate',
    trail_rating: true,
    elevationGain: 400,
    length: 4.0,
    description: 'A moderately challenging trail with beautiful views.',
  },
];

// Function to seed the database with sample trails
const seedDatabase = async () => {
  try {
    // Synchronize the model with the database
    await Trail.sync({ force: true });

    // Create sample trails
    await Trail.bulkCreate(sampleTrails);

    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Call the seedDatabase function
seedDatabase();
