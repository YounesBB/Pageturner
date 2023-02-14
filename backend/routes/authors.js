const express = require('express')
const Author = require('../models/authorModel')
const {
  addAuthor,
  getAuthor,
  getAuthors, 
  deleteAuthor, 
  updateAuthor
} = require('../controllers/authorController')

const router = express.Router()

//GET all authors
router.get('/', getAuthors)

//GET a singel author
router.get('/:id', getAuthor)

//POST a new author
router.post('/', addAuthor)

//DELETE an author 
router.delete('/:id', deleteAuthor)

//UPDATE an author
router.patch('/:id', updateAuthor)

module.exports = router