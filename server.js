const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start the server with error handling
app.listen(8080,async()=>{
  try {
    await mongoose.connect("mongodb+srv://singhsuryanshukumar5:suryanshu@cluster0.iore3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("server connected sucessfully")
  } catch (error){
    console.log(error)
  }
})