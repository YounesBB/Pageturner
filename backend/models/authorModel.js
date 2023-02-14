const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: { //Name can perhaps be split in forName and surName
    type: String,
    required: true
  },
  birthYear: { //One could later include month and date. 
    type: Number,
    required: false 
  }
}, {timestamps: true })

module.exports = mongoose.model('Author', authorSchema)