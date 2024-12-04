const express = require('express');
const { registerUser } = require('../services/userService');

// Initialize router
const router = express.Router();

// Define routes
router.post('/register', async (req, res, next) => {
    try {
        const user = await registerUser(req.body);
        res.json({ message: 'User registered successfully', user });
    } catch (err) {
        next(err); // Pass error to centralized handler
    }
});

module.exports = router;
