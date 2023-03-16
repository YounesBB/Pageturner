const Book = require('../models/Book');
const Author = require('../models/Author');
const User = require('../models/User');
const jwt = require('jsonwebtoken'); // Used to create, sign, and verify tokens
const asyncHandler = require('express-async-handler');

// @desc    Get all users
// @route   GET /users
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).exec();
  
    // If no users found
    if (!users?.length) {
      res.status(400);
      throw new Error('No users found');
    }
  
    res.status(200).json(users);
  });

// @desc    Get a user by id
// @route   GET /users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await User.findOne({ id }).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    } else {
        res.status(200).json(user)
    }
});


// @desc    Delete a user by id
// @route   DELETE /users/:id
// @access  Private/Admin
const deleteUserById = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    } else {
        await user.deleteOne()
    }
    res.status(200).json({ message: 'User deleted' })

});

// @desc    Register a new user
// @route   POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill out all fields' })
    }

    const userExists = await User.findOne({ email }).exec()

    if (userExists) {
        res.status(400).json({ message: 'User already exists' })
    }

    // Maybe hash the password in the future? Bcrypt
    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ message: 'Invalid user data' })
    }
})

// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Find user by email
    const user = await User.findOne({ email })

    if (user && (user.password === password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ message: 'Invalid email or password' })
    }
})

// @desc    Get user data
// @route   GET /users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    registerUser,
    loginUser,
    getMe
}