const Review = require('../models/Review')
const Book = require('../models/Book')
const User = require('../models/User')
const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');



module.exports = {
  createReview
}

// @desc    POST a review
// @route   POST /review
// @access  Public
const createReview = asyncHandler(async (req, res) => {
  // Extract the necessary data from the request body
  const { bookId, userId, rating, comment } = req.body;

  // Check if the book with the given bookId exists in the database
  const book = await Book.findById(bookId);
  if (!book) {
    res.status(400);
    throw new Error('Book not found');
  }

  // Check if the user with the given userId exists in the database
  const user = await User.findById(userId);
  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  // Create a new review with the extracted data and save it to the database
  const review = new Review({
    book: bookId,
    user: userId,
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

