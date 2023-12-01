const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const trailRoutes = require('./trailRoutes');

// Home route
router.get('/', (req, res) => {
  res.render('home');
});

// Include authentication and trail routes
router.use('/auth', authRoutes);
router.use('/trail', trailRoutes);

module.exports = router;