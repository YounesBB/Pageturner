const Book = require('../models/Book');
const Author = require('../models/Author');
const asynHandler = require('express-async-handler');

// @desc    Get all books
// @route   GET /books
// @access  Public
const getAllBooks = asynHandler(async (req, res) => {

    const books = await Book.find()

    // If no books found
    if (!books?.length) {
        res.status(400).json({ message: 'No books found' })
    }

    // Return the books
    res.json(books)

})

// @desc    Get a book by id
// @route   GET /books/:id
// @access  Public
const getBookById = asynHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book) {
        res.status(400).json({ message: 'No book found' })
    }
    res.status(200).json(book)
})

// @desc    Get a book by title
// @route   GET /books/title/:title
// @access  Public
const getBookByTitle = asynHandler(async (req, res) => {

    const { title } = req.params

    const regex = new RegExp('^' + title + '$', 'i');
    const book = await Book.findOne({ title: regex }, () => {
        if (!book) {
            res.status(400).json({ message: 'No book found' })
        }
    })

    res.status(200).json(book)
})

// @desc    Create a new book
// @route   POST /books
// @access  Public





