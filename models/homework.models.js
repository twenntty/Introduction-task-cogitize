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
    DueData: {
        type: String,
        require: true
    },
    StudentID: {
        type: String,
        require: true
    }
})

const Homework = mongoose.model('homework', HomeworkSchema)
module.exports = Homework