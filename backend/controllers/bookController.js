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
    res.status(200).json(books)

})

// @desc    Get a book by id
// @route   GET /books/:id
// @access  Public
const getBookById = asynHandler(async (req, res) => {
    const { id } = req.body
    const book = await Book.findById(id).exec()
    if (!book) {
        res.status(400).json({ message: 'No book found' })
    }
    res.status(200).json(book)
})

// @desc    Get a book by title
// @route   GET /books/title/:title
// @access  Public
const getBookByTitle = asynHandler(async (req, res) => {

    const { title } = req.body

    const regex = new RegExp('^' + title + '$', 'i');
    const book = await Book.findOne({ title: regex }, () => {
        if (!book) {
            res.status(400).json({ message: 'No book found' })
        }
    })

    res.status(200).json(book)
})

// @desc    Create a new book
// @route   POST /books/
// @access  Public
const createNewBook = asynHandler(async (req, res) => {

    const { title, author, releaseYear, genre, description } = req.body

    if (!title || !releaseYear || !genre || !description) {
        res.status(400).json({ message: 'All fields are required' })
    }

    // Checking for duplicates
    const duplicate = await Note.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate book title' })
    }

    const book = await Book.create({ title, author, description, genre, releaseYear })

    if (book) { // Created 
        return res.status(201).json({ message: 'New book created' })
    } else {
        return res.status(400).json({ message: 'Invalid book data received' })
    }

})

// @desc    Update a book
// @route   PATCH /books/:id
// @access  Public
const updateBook = asynHandler(async (req, res) => {
    const { id, title, author, releaseYear, genre, description } = req.body

    const book = await Book.findById(id).exec()

    if (!book) {
        res.status(400).json({ message: 'No book found' })
    }

    // Checking for duplicate titles
    const duplicate = await Book.findOne({ title }).lean().exec()

    if (duplicate && duplicate._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate book title' })
    }

    book.title = title
    book.author = author
    book.releaseYear = releaseYear
    book.genre = genre
    book.description = description

    const updatedBook = await book.save()
    res.json(`'${updatedBook.title}' updated`)
})

// @desc    Delete a book
// @route   DELETE /books/:id
// @access  Public
const deleteBook = asynHandler(async (req, res) => {
    const { id } = req.body

    const book = await Book.findById(id).exec()

    if (!book) {
        res.status(400).json({ message: 'No book found' })
    }

    await book.deleteOne()
    res.json(`'${book.title}' deleted`)
})




module.exports = {
    getAllBooks,
    getBookById,
    getBookByTitle,
    createNewBook,
    updateBook,
    deleteBook
}

