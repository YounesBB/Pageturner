const express = require('express')
const Author = require('../models/Author')
const {
  addAuthor,
  getAuthor,
  getAuthorByFullName,
  getAuthors, 
  deleteAuthor,
  deleteAuthorByFullName
} = require('../controllers/authorController')

const router = express.Router()

//GET all authors
router.get('/', getAuthors)

//GET a singel author
router.get('/:id', getAuthor)

//GET a singel author by FullName
router.get('/fullname/:name', getAuthorByFullName)

//POST a new author
router.post('/', addAuthor)

//DELETE an author 
router.delete('/:id', deleteAuthor)

//DELETE an author by FullName
router.delete('/fullname/:name', deleteAuthorByFullName)


module.exports = router