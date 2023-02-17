const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')


router.get('/', bookController.getAllBooks)                  // GET all books

router.get('/:id', bookController.getBookById)               // GET a book by id

router.get('/title/:title', bookController.getBookByTitle)   // GET a book by title

router.post('/', bookController.createNewBook)               // POST a new book

router.patch('/:id', bookController.updateBook)              // PATCH a book

router.delete('/:id', bookController.deleteBook)             // DELETE a book



module.exports = router