# Rotten Trails

Rotten Trails is a web application that provides a platform for users to explore and review trails in Utah. Hikers can share their experiences, rate trails, and engage with a community of outdoor enthusiasts. The platform aims to enhance the hiking experience by offering valuable insights and fostering a sense of community among users.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [live application](#live-application)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Trail Exploration:** View a curated list of trails in Utah with detailed information.
- **User Reviews:** Read and write reviews about trail conditions, difficulty, and other relevant details.
- **Rating System:** Users can rate trails based on their experiences.
- **User Authentication:** Secure user authentication and session management.
- **Community Interaction:** Engage with a community of hikers through comments and discussions.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MySQL database set up.

### Installation

1. Clone the repository:

   git clone https://github.com/loganlosee/rotten-trails.git


2. Navigate to the project directory:

     cd rotten-trails

3. Install dependencies:

    npm install

4. Set up the MySQL database:

    (Assuming MySQL server is running)
    mysql -u yourusername -p

    source db/schema.sql;

    exit

5. Seed the database:

    npm run seed

### Usage
Start the application:

    npm start

    Open your browser and navigate to http://localhost:3000.
    
## live application
OR navigate to deployed app at heroku

  https://rotten-trails-96144daadebc.herokuapp.com/

## Technologies
Node.js
Express.js
Sequelize (MySQL)
Handlebars
Foundation CSS
Boostrap CSS

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
Sequelize
Express.js
Foundation CSS
Bootstrap CSS
