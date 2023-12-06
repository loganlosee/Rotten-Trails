const router = require('express').Router();
const { Trail } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTrail = await Trail.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const trailData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!trailData) {
      res.status(404).json({ message: 'No trail found with this id!' });
      return;
    }

    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
