const express = require('express')
const router = express.Router()
const {
    getAllBooks,
    getBookById,
    getBookByISBN,
    getBookByTitle,
    createNewBook,
    updateBook,
    deleteBook, 
    deleteBookByTitle
  } = require('../controllers/bookController')

//const { protect } = require('../middleware/authMiddleware')

// Get all books
router.get('/', getAllBooks)

// Get a book by id
router.get('/:id', getBookById)

// Get a book by ISBN
router.get('/isbn/:isbn', getBookByISBN)

// Get a book by title
router.get('/title/:title', getBookByTitle)

// Create a new book
router.post('/', createNewBook)

// Update a book
router.patch('/:id', updateBook)

// Delete a book
router.delete('/:id', deleteBook)

// Delete a book
router.delete('/title/:title', deleteBookByTitle)

module.exports = router