const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for the root endpoint ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app for use in other files (if necessary)
module.exports = app;
