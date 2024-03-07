const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HomeworkSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    dueData: {
        type: Date,
        require: true
    },
    StudentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        require: true
    }
})

const Homework = mongoose.model('homework', HomeworkSchema)
module.exports = Homework