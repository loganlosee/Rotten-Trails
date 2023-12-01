// config/config.js

module.exports = {
    development: {
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      host: 'localhost',
      dialect: 'mysql',
    },
    production: {
      // Production database configuration for deployment on platforms like Heroku
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
  };