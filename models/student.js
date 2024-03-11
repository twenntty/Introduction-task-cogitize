const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Age: { type: Number, required: true },
    Class: { type: String, required: true }
  });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;