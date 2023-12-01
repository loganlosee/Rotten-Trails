const express = require('express');
const router = express.Router();

// Example routes
router.get('/list', (req, res) => {
  res.render('commentList'); // Replace with your actual rendering logic
});

router.post('/add', (req, res) => {
  // Add comment logic (post method)
});

router.get('/details/:id', (req, res) => {
  // Comment details logic
});

module.exports = router;
