const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Markus:090987@cluster0.m2w6nyw.mongodb.net/', {dbName: 'api_introduction'})
    .then(() => {
        console.log('mongodb connected.')
    })
    .catch((err) => console.log(err.message))