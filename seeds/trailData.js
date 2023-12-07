const { Trail } = require('../models');

const traildata = [
  {
    "trail_name": "Scenic_Trail",
    "difficulty": "Moderate",
    "length": 3.5,
    "description": "A beautiful trail with scenic views.",
  },
  {
    "trail_name": "Adventure_Hike",
    "difficulty": "Difficult",
    "length": 5.8,
    "description": "An adventurous and challenging hike.",
  },
  {
    "trail_name": "Nature_Walk",
    "difficulty": "Easy",
    "length": 2.0,
    "description": "A relaxing nature walk through the woods.",
  }
];

const seedTrail = () => {
  const sanitizedTrailData = traildata.map(trail => ({
    ...trail,
    sanitized_trail_name: trail.trail_name.replace(/\s+/g, '_').toLowerCase(),
  }));

  return Trail.bulkCreate(sanitizedTrailData);
};

module.exports = seedTrail;

