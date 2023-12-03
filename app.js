const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const sequelize = require('./config/config');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

const handlebars = require('handlebars');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

hbs.handlebars.registerHelper('extend', function (name, context) {
  const block = hbs.handlebars.registeredBlocks[name];
  return block ? block(context) : null;
});

app.use(routes);

app.get('/', (req, res) => {
  // Example: Check if the user is logged in
  const loggedIn = req.session.userId !== undefined;
  //const loggedIn = true; //TESTING PURPOSES

  res.render('home', { pageTitle: 'Home Page', loggedIn });
});


// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
