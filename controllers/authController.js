// controllers/authController.js

const bcrypt = require('bcrypt');
const { User } = require('../models/user');

const authController = {
  getLogin: (req, res) => {
    res.render('auth/login');
  },
  postLogin: async (req, res) => {
    // Authentication logic 
  },
  logout: (req, res) => {
    // Logout logic
  },
};

module.exports = authController;
