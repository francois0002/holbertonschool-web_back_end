const http = require('http');
const fs = require('fs').promises; // Use promises-based fs functions
const path = require('path');

// Get the database file path from command-line arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node 5-http.js <database.csv>');
  process.exit(1);
}
const dbFilePath = args[0];

// Function to read and process the CSV file
async function readAndProcessCSV(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = {
      CS: [],
      SWE: []
    };

    for (const line of lines) {
      const [name, type] = line.split(',');
      if (name && type) {
        if (type === 'CS') students.CS.push(name.trim());
        if (type === 'SWE') students.SWE.push(name.trim());
      }
    }
    return students;
  } catch (err) {
    throw err;
  }
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const students = await readAndProcessCSV(dbFilePath);
      const csStudents = students.CS.join(', ');
      const sweStudents = students.SWE.join(', ');
      const response = [
        'This is the list of our students',
        `Number of students: ${students.CS.length + students.SWE.length}`,
        `Number of students in CS: ${students.CS.length}. List: ${csStudents}`,
        `Number of students in SWE: ${students.SWE.length}. List: ${sweStudents}`
      ].join('\n');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response + '\n');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the server for testing or other uses
