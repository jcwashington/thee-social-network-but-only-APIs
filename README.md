
  # Thee Social Network... but only the API

  [![License: ISC](https://img.shields.io/badge/license-ISC-green)](http://opensource.org/licenses/ISC)

  ## Description
  This project is an example of an API that could be used for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. An intended user story could be as follows:

    ```md
    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data
    ```

  Technologies Utilized:
  For this project we utilized [Express.js](https://www.npmjs.com/package/express) for the routing and [Mongoose](https://www.npmjs.com/package/mongoose) packages. [Moment.js](https://momentjs.com/) was used to better format our creation timestamps for readability purposes.

  ## Contents

  1. [Installation](#installation)
  2. [Project Usage](#usage)
  3. [Licenses](#licenses)
  4. [Testing](#testing)
  5. [How to contribute](#contributing)
  6. [Project Credits](#credits)
      1. Authors
      2. Additional Acknowledgements
  7. [Have Questions?](#questions)

  ## [Installation](#installation)
  If you plan to run the application on your local machine follow the steps below. 

  To clone repo: 
  ```md
  git@github.com:jcwashington/thee-social-network-but-only-APIs.git
  ```

  Install the necessary dependencies with `npm i`
  
  Running `npm start` in a terminal will start the server and you can now use Postman, Insomnia or some other REST API testing tool to interact with the endpoints


  ## [Project Usage](#usage)
  
  Here are the endpoints provided by this API

  **User**
  - Get all users:        `GET /api/users`
  - Create a user:        `POST /api/users`
  - Get user by ID:       `GET /api/users/:id`
  - Update a user:        `PUT /api/users/:id`
  - Delete a user:        `DELETE /api/users/:id`
  - Add a friend:         `PUT /api/users/:id/friends/:friendId`
    - NOTE: the user will also be added to their new friend's friend array
  - Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`
    - NOTE: the user will also be removed from their friend's friend array

  A video walkthrough of the /users endpoints can be found here: [Thee Social Network - User Routes](https://drive.google.com/file/d/1EStXAFUplI_FFadMWakOpa8thK2WipTW/view)

  **Thoughts**
  - Get all thoughts:     `GET /api/thoughts`
  - Create a thought:     `POST /api/thoughts`
  - Get thought by ID:    `GET /api/thoughts/:id`
  - Update a thought:     `PUT /api/thoughts/:id`
  - Delete a thought:     `DELETE /api/thoughts/:id`

  **Reactions**
  - Add a reaction to a thought:       `PUT /api/thoughts/:id/reactions`
  - Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

  A video walkthrough of the /thoughts endpoints can be found here: [Thee Social Network - Thoughts Routes](https://drive.google.com/file/d/1a5w4kgyexGAGfTY0N4I6cyeCx46ix6rl/view)

  ## [Licenses](#licenses)
  This project uses the ISC license.

  To find out more information on open source licenses, please refer to [https://choosealicense.com/](https://choosealicense.com/).

  ## [Testing](#testing)
  N/A

  ## [How to contribute](#contributing)
  If you would like to contribute to this project, follow the steps below.
  1. Fork the repo on GitHub.
  2. Clone the project to your own machine.
  3. Create a branch for your feature work.
  3. Commit changes to your own branch.
  4. Push your work back up to your fork.
  5. Submit a Pull request so that we can review your changes

  ## [Project Credits](#credits)

  Project Authors:

  [jcwashington](https://github.com/jcwashington)
  

  ## [Have Questions?](#questions)
  Contact the author with your questions:
  - GitHub Username: jcwashington
  - GitHub Email: jasmine.washington412@gmail.com
