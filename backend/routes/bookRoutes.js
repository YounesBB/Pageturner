const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')


router.route('/')
    .get(bookController.getAllBooks)    //Get all books
    .get(bookController.getBookById)    //Get a book by id
    .get(bookController.getBookByTitle) // Get a book by title
    .post(bookController.createNewBook) //Create a new book
    .patch(bookController.updateBook)   //Update a book
    .delete(bookController.deleteBook)  //Delete a book


module.exports = router