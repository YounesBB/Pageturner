const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')


router.route('/')
    .get(bookController.getAllBooks)                    // Get all books
    .get(':id', bookController.getBookById)             // Get a book by id
    .get('title/:title', bookController.getBookByTitle) // Get a book by title
    .post(bookController.createNewBook)                 // Create a new book
    .patch(':id', bookController.updateBook)            // Update a book
    .delete(':id', bookController.deleteBook)           // Delete a book


module.exports = router