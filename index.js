const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Student, Homework} = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Markus:090987@cluster0.m2w6nyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {dbName: 'api_introduction'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.post('/api/students', async (req, res, next) => {
  try{
    const newStudent = req.body;
    const createdStudent = await Student.create(newStudent);
    res.status(201).json(createdStudent);
  } catch (error) {
    next(error);
  }
});

app.get('/api/students', async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch(error) {
    next(error);
  }
});

app.post('/api/homeworks', async (req, res, next) => {
  try {
    const newHomework = req.body;
    const createdHomework = await Homework.create(newHomework);
    res.status(201).json(createdHomework);
  } catch (error) {
    next(error);
  }
});

app.get('/api/homeworks', async (req, res, next) => {
  try {
    const { studentId } = req.query;
    const query = studentId ? { StudentID: studentId } : {};
    const homeworks = await Homework.find(query);
    res.json(homeworks);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});