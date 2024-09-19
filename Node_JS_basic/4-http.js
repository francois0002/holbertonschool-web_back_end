// Import the http module from Node.js
const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');
  // Set the response status code to 200 (OK)
  res.statusCode = 200;
  // Send the response text
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other files (if needed)
module.exports = app;
