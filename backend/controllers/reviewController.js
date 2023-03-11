const Review = require('../models/Review')
const Book = require('../models/Book')
const User = require('../models/User')
const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');



// @desc    POST a review
// @route   POST /review
// @access  Public
const createReview = asyncHandler(async (req, res) => {
  // Extract the necessary data from the request body
  const { book, user, rating, comment } = req.body;

  // Check if the book with the given bookId exists in the database
  const book1 = await Book.findById(book);
  if (!book1) {
    res.status(400);
    throw new Error('Book not found');
  }

  // Check if the user with the given userId exists in the database
  const user1 = await User.findById(user);
  if (!user1) {
    res.status(400);
    throw new Error('User not found');
  }

  // Create a new review with the extracted data and save it to the database
  const review = new Review({
    book: book,
    user: user,
    rating,
    comment
  });
  const savedReview = await review.save();

  // Return the saved review with the associated book and user data populated
  res.status(201).json({
    review: savedReview,
    book,
    user
  });
});

module.exports = {
  createReview
}


