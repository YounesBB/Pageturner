const express = require('express')
const Review = require('../models/Review')
const {
  createReview
} = require('../controllers/reviewController')

const router = express.Router()

// POST a new Review
router.post('/', createReview) 





module.exports = router