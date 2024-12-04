const { registerUser } = require('../services/userService');

router.post('/register', async (req, res, next) => {
    try {
        const user = await registerUser(req.body);
        res.json({ message: 'User registered successfully', user });
    } catch (err) {
        next(err); // Pass error to centralized error handler
    }
});
