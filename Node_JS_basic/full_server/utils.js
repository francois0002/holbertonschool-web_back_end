import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentGroups = {};

    lines.forEach(line => {
      const [firstName, field] = line.split(',');
      if (firstName && field) {
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }
    });

    return studentGroups;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
