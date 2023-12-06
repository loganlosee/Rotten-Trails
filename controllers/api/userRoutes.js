const router = require('express').Router();
const User = require('../../models').user;
const sequelize = require('../../config/connection');

sequelize.sync({ alter: true }) // Use 'force: true' carefully; it drops tables
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });


// Handle user signup
router.post('/signup', async (req, res) => {
  try {
    // Destructure relevant fields from the request body
    const { username, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user with the provided data
    const newUser = await User.create({ username, email, password });
    
    // Return the newly created user data in the response
    res.status(201).json({ user: newUser, message: 'User created successfully' });
  } catch (error) {
    console.error(error); // Log the caught error
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log(
        'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
