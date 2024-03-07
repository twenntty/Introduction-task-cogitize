const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    Name: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    Age: {
        type: Number,
        require: true
    },
    Class:{
        type: String,
        require: true
    }
})

const Student = mongoose.model('student', StudentSchema)
module.exports = Student