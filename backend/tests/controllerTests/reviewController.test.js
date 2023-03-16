const { createReview } = require('../../controllers/reviewController');
const Review = require('../../models/Review');
const Book = require('../../models/Book');
const User = require('../../models/User');
const httpMocks = require('node-mocks-http');

describe('createReview', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create a review successfully', async () => {
    // Arrange
    const book = {
      _id: 'book1Id',
      title: 'Book 1',
    };

    const user = {
      _id: 'user1Id',
      username: 'User 1',
    };

    const requestBody = {
      book: book._id,
      user: user._id,
      rating: 4,
      comment: 'Great book!',
    };

    Book.findById = jest.fn().mockResolvedValue(book);
    User.findById = jest.fn().mockResolvedValue(user);
    Review.prototype.save = jest.fn().mockResolvedValue({ ...requestBody });

    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/review',
      body: requestBody,
    });

    const res = httpMocks.createResponse();

    // Act
    await createReview(req, res);

    // Assert
    expect(Book.findById).toHaveBeenCalledWith(book._id);
    expect(User.findById).toHaveBeenCalledWith(user._id);
    expect(Review.prototype.save).toHaveBeenCalled();
    expect(res.statusCode).toBe(201);
    expect(res._getJSONData()).toEqual({
      review: requestBody,
      book: book._id,
      user: user._id,
    });
  });

  // Add more test cases if needed
});