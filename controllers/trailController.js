const express = require('express');
const router = express.Router();

// Example routes
router.get('/search', (req, res) => {
  res.render('search'); // Replace with your actual rendering logic
});

router.post('/search', (req, res) => {
  // Search logic (post method)
});

router.get('/details/:id', (req, res) => {
  // Trail details logic
});

module.exports = router;
