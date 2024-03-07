const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const createError = require('http-errors')
const bodyParser = require('body-parser')
require('dotenv').config()
require('./helpers/init_mongodb')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())

async function startApp() {
  try{
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  }
  catch{
    console.log(e)
  }
}

startApp();