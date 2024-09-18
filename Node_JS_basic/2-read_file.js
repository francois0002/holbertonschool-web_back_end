const fs = require('fs');

function countStudents(filePath) {
  let data;
  try {
    data = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }


  const lines = data.trim().split('\n');
  const studentCounts = {};
  let totalStudents = 0;


  lines.forEach((line, index) => {
    if (index === 0) return;

    const [firstName, field] = line.split(',');

    if (!field || !firstName) return;

    if (!studentCounts[field]) {
      studentCounts[field] = [];
    }

    studentCounts[field].push(firstName);
    totalStudents += 1;
  });

  console.log(`Number of students: ${totalStudents}`);
  Object.keys(studentCounts).forEach(field => {
    const studentsList = studentCounts[field].join(', ');
    console.log(`Number of students in ${field}: ${studentCounts[field].length}. List: ${studentsList}`);
  });
}

module.exports = countStudents;
