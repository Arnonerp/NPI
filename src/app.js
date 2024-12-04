const express = require('express');
const userRoutes = require('./routes/userRoutes');
const Logger = require('./utils/logger');

const app = express();

app.use(express.json());

// Middleware to log incoming requests
app.use(async (req, res, next) => {
    const startTime = Date.now();
    await Logger.info(`Incoming request: ${req.method} ${req.url}`, {
        headers: req.headers,
        body: req.body,
    });

    res.on('finish', async () => {
        const endTime = Date.now();
        await Logger.info(`Response sent: ${req.method} ${req.url}`, {
            statusCode: res.statusCode,
            duration: `${endTime - startTime}ms`,
        });
    });

    next();
});

// Default route to handle GET /
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the NPI API!' });
});

// User routes
app.use('/api/users', userRoutes);

// Middleware to handle errors
app.use(async (err, req, res, next) => {
    await Logger.error(`Error: ${err.message}`, {
        stack: err.stack,
        method: req.method,
        url: req.url,
        body: req.body,
    });
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
