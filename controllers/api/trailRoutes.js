const router = require('express').Router();
const { Trail, Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTrail = await Trail.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrail);
  } catch (err) {
    res.status(400).json(err);
  }
});

//render trail page if logged in and clicked on trail
router.get('/trails/trail_name', withAuth, async (req, res) => {
  try {
    const trailData = await Trail.findByPk(req.params.trail_name, {
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

    const trail = trailData ? trailData.get({ plain: true }) : null;
    res.render('trail', { trail, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/trails/trail_name/rate', withAuth, async (req, res) => {
  try {
    const { thumbs_up } = req.body;
    const userId = req.session.user_id;
    const trailName = req.params.trail_name;

    // Create a new rating
    const newRating = await Rating.create({
      thumbs_up,
      userId,
    });

    // Associate the rating with the trail
    const trail = await Trail.findByPk(trailName);
    await trail.addRating(newRating);

    res.redirect(`/trail/${trailName}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/trail_name', withAuth, async (req, res) => {
  try {
    const trailData = await Trail.destroy({
      where: {
        trail_name: req.params.trail_name,
        user_id: req.session.user_id,
      },
    });

    if (!trailData) {
      res.status(404).json({ message: 'No trail found with this name!' });
      return;
    }

    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
