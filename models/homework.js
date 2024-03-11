const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    DueDate: { type: Date, required: true },
    StudentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }
  });

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;