const express = require('express');
const router = express.Router();
const { Trail } = require('../models');
const withAuth = require('../utils/auth');

// GET all trails for homepage
router.get('/', async (req, res) => {
  try {
    const dbTrailData = await Trail.findAll();

    const trails = dbTrailData.map((trail) => trail.get({ plain: true }));

    res.render('home', {
      trails,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one trail
// Use the custom middleware before allowing the user to access the trail
router.get('/trail/:id', withAuth, async (req, res) => {
  try {
    const dbTrailData = await Trail.findByPk(req.params.id);

    const trail = dbTrailData.get({ plain: true });
    res.render('trail', { trail, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Other routes (if needed)

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
