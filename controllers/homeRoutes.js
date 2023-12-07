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

router.get('/login', (req, res) => {
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

router.get('/trails/:sanitized_trail_name', withAuth, async (req, res) => {
  try {
    const trailData = await Trail.findOne({
      where: { trail_name: req.params.sanitized_trail_name },
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

    if (!trailData) {
      res.status(404).json({ message: 'No trail found with this name!' });
      return;
    }

    const trail = trailData.get({ plain: true });
    res.render('trail', { trail, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
