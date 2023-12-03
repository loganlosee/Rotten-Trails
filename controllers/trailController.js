const express = require('express');
const router = express.Router();
const { Trail } = require('../models/trail');

// Define your trail routes
router.get('/', async (req, res) => {
  try {
    const trails = await Trail.findAll();
    res.render('trails', { pageTitle: 'Trails', trails });
  } catch (error) {
    console.error('Error fetching trails:', error);
    res.status(500).render('error', { pageTitle: 'Error', errorMessage: 'Internal Server Error' });
  }
});

module.exports = router;
