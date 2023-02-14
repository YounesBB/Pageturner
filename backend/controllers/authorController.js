const Author = require('../models/authorModel')
const mongoose = require('mongoose')

// get all workouts 
const getAuthors = async (req, res) => {
  const workouts = await Author.find({}).sort({createdAt: -1}) //find({reps : 20}) hadde gitt alle med 20 reps. -1 = decending order

  res.status(200).json(workouts)
}

// get a singel workout
const getAuthor = async (req, res) => {
  const {id} = req.params //vi henter id fra req.params liste

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Author.findById(id)

  if(!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)


}

// create new workout 
const addAuthor = async (req, res) => {
  const {title, load, reps} = req.body //her sier vi at title load og reps skal være en del av req som blir sent
  // ad doc to db
  try {
    const workout = await Author.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})

  }
}

// delete a workout 
const deleteAuthor = async (req, res) => {
  const {id} = req.params //vi henter id fra req.params liste

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Author.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)

}


// update a workout
const updateAuthor = async (req, res) => {
  const {id} = req.params //vi henter id fra req.params liste

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Author.findByIdAndUpdate({_id: id}, {
    ...req.body //spread operator
  })

  if(!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)

}

module.exports = {
  getAuthor,
  getAuthors,
  addAuthor, 
  deleteAuthor, 
  updateAuthor
}