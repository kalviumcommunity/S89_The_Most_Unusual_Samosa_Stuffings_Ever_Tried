const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config();

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start the server with error handling

app.get('/', (req, res) => {
  res.send('DB connected sucessfully');
});

app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("server connected successfully");
  } catch (error) {
    console.log(error);
  }
});