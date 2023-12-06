const router = require('express').Router();
const { User, Trail, Rating } = require('../models');
const withAuth = require('../utils/auth')

// Render the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      // Redirect to the login page if the user is not logged in
      res.redirect('/login');
      return;
    }

    const trails = await Trail.findAll({
      include: [
        {
          model: Rating,
          as: 'trailRatings', // Use the alias here
          include: {
            model: User,
            attributes: ['name'],
          },
        },
      ],
    });

    const trailsData = trails.map(trail => trail.get({ plain: true }));

    res.render('homepage', { loggedIn: req.session.logged_in, trails: trailsData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

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
