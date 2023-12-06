const { Rating } = require('../models');

const ratingdata = 
[
    {
      "trail_name": "Scenic Trail",
      "thumbs_up": true
    },
    {
      "trail_name": "Adventure Hike",
      "thumbs_up": true
    },
    {
      "trail_name": "Nature Walk",
      "thumbs_up": false
    }
]

const seedRating = () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;