const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Render the login page
router.get('/login', (req, res) => {
  res.render('login', { pageTitle: 'Log In' });
});

// Handle login form submissions
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect('/trails'); // Redirect to the trails page after successful login
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render the signup page
router.get('/signup', (req, res) => {
  res.render('signup', { pageTitle: 'Sign Up' });
});

// Handle signup form submissions
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Log out the user
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;