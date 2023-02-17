require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const authorRoutes = require('./routes/authorRoutes')
const bookRoutes = require('./routes/bookRoutes')

// express app
const app = express()

// middleware
app.use(express.json()) //it checks if any request that comes in has a body, if it has it is passed as req in workouts.js
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


//means use workoutroutes when a user does a request on localhost:4000/api/workouts...
app.use('/api/author', authorRoutes)
app.use('/api/books', bookRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request 
    app.listen(process.env.PORT, () => {  //could have written 4000 directly, but not good security practise
      console.log('connected to db and listening on port:', process.env.PORT)
    })
  }) //function to run when complete
  .catch((error) => {
    console.log(error)
  })

/*
//listen for request 
app.listen(process.env.PORT, () =>{ //could have written 4000 directly, but not good security practise
  console.log('listening on port 4000', process.env.PORT)
})
we put it inside then since we dont want to listen to request when we are not even connected*/
