const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;