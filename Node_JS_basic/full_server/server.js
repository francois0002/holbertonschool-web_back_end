import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

// Use the defined routes
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app for testing or further use
export default app;
