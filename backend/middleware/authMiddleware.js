const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        // Get token from header
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token provided' });
        // const guest = new Guest({ name: 'Guest' })
        // req.user = guest;
        // return next()
    }
    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Get user from token
        const user = await User.findById(decoded.id).select('-password')
        if (!user) {
            res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next()
    } catch (error) {
        console.log(error)

        res.status(401).json({ message: 'Not authorized, token failed' });
    }


})

module.exports = { protect }