const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const userRouter = require('./userRouter'); 
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors()); 
app.use(bodyParser.json()); 
app.use("/user", userRouter);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Routes
const crudRoutes = require('./CrudRoutes');
app.use('/api', crudRoutes);

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});