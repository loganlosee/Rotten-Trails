const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models/user');

const authController = {
  getLogin: (req, res) => {
    // Assuming you have already set up the 'handlebars' view engine
    res.render('auth/login');
  },
  postLogin: async (req, res) => {
    // Authentication logic 
  },
  logout: (req, res) => {
    // Logout logic
  },
};
router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;
