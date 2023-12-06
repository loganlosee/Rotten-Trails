const router = require('express').Router();
const { User, Trail, Rating } = require('../models');
const withAuth = require('../utils/auth')

// Render the homepage

router.get('/', async (req, res) => {
  try {
    let trailsData = [];

    if (req.session.logged_in) {
      const trails = await Trail.findAll({
        include: [
          {
            model: Rating,
            as: 'trailRatings',
            include: {
              model: User,
              attributes: ['name'],
            },
          },
        ],
      });

      trailsData = trails.map(trail => trail.get({ plain: true }));
    }

    res.render('homepage', { loggedIn: req.session.logged_in, trails: trailsData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/trails', async (req, res) => {
  try {

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
  if (req.session.loggedIn) {
    res.redirect('/trails');
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
