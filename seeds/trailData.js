const { Trail } = require('../models');

const traildata = [
  {
    "trail_name": "Scenic Trail",
    "difficulty": "Moderate",
    "length": 3.5,
    "description": "A beautiful trail with scenic views.",
  },
  {
    "trail_name": "Adventure Hike",
    "difficulty": "Difficult",
    "length": 5.8,
    "description": "An adventurous and challenging hike.",
  },
  {
    "trail_name": "Nature Walk",
    "difficulty": "Easy",
    "length": 2.0,
    "description": "A relaxing nature walk through the woods.",
  }
];

const seedTrail = () => Trail.bulkCreate(traildata);

module.exports = seedTrail;
