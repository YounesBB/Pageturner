const express = require('express')
const router = express.Router()

const { getAllUsers, getUserById, deleteUserById, registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const { userAccess } = require('../middleware/authorization')


// Get all users
router.get('/', protect, userAccess, getAllUsers)

// Get a user by id
router.get('/:id', protect, userAccess, getUserById)

// Delete a user by id
router.delete('/:id', protect, userAccess, deleteUserById)

// Register a new user
router.post('/', registerUser)

// Authenticate a user
router.post('/login', loginUser)

// Get the current user
router.get('/me', protect, userAccess, getMe)

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

module.exports = router