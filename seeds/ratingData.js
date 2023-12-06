const { Rating } = require('../models');

const ratingdata = [
  {
    thumbs_up: true,
  },
  {
    thumbs_up: true,
  },
  {
    thumbs_up: false,
  }
];

const seedRating = () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;
