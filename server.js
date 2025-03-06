const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start the server with error handling
app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
