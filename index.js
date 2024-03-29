const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routers');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', router);

mongoose.connect('mongodb+srv://Markus:090987@cluster0.m2w6nyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {dbName: 'api_introduction'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
