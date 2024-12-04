const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.get('/register', (req, res) => {
    res.json({ message: 'User registration endpoint (GET)' });
});


router.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User registered', user });
});

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;
