const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Class: { type: String, required: true }
});

const homeworkSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  DueDate: { type: Date, required: true },
  StudentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }
});

const Student = mongoose.model('Student', studentSchema);
const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = { Student, Homework };