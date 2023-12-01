// Import required modules
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const sequelize = require('./config/config');
const routes = require('./controllers');  // Make sure this is correct

const handlebars = require('handlebars');
const bcrypt = require('bcrypt');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up session
const sessionStore = new SequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-fallback-secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

// Custom Handlebars helper (if needed)
hbs.handlebars.registerHelper('extend', function (name, context) {
  const block = hbs.handlebars.registeredBlocks[name];
  return block ? block(context) : null;
});

// Routes
app.use('/api/auth', routes.authController);
app.use('/api/trail', routes.trailController);
app.use('/api/comment', routes.commentController);

// Define routes
app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home Page' });
});

app.get('/api/auth/logout', (req, res) => {
  // Handle logout logic and redirect or render a page
  // ...
});

// Error middleware
app.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

// Start Sequelize and sync models with the database
sequelize.sync().then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

