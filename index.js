const express = require('express')
const mongoose = require('mongoose')
require('./helpers/init_mongodb')

const app = express()
const PORT = 3000

app.use(express.json())

async function startApp() {
  try{
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  }
  catch{
    console.log(e)
  }
}

startApp();