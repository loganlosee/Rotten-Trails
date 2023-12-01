// routes/trailRoutes.js

const express = require('express');
const router = express.Router();
const trailController = require('../controllers/trailController');

// Trail search routes
router.get('/search', trailController.getSearch);
router.post('/search', trailController.postSearch);

// Trail details route
router.get('/details/:id', trailController.getDetails);

module.exports = router;