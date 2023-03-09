const express = require('express')
const router = express.Router()

const { getAllUsers, getUserById, deleteUserById, registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')


// Get all users
router.get('/', getAllUsers)

// Get a user by id
router.get('/:id', getUserById)

// Delete a user by id
router.delete('/:id', deleteUserById)

// Register a new user
router.post('/', registerUser)

// Authenticate a user
router.post('/login', loginUser)

// Get the current user
router.get('/me', protect, getMe)

module.exports = router