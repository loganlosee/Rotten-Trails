const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Render the homepage
router.get('/', async (req, res) => {
  try {
    // You can include logic to fetch data for rendering the homepage if needed
    res.render('homepage');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Render the login page
router.get('/login', (req, res) => {
  // Redirect to the homepage if the user is already logged in
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Render the signup page
router.get('/signup', (req, res) => {
  // Redirect to the homepage if the user is already logged in
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});



module.exports = router;
