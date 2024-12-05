const { startHttpRedirect } = require('./httpRedirect');
const { startHttpsServer } = require('./httpsServer');
const connectDB = require('./db');
require('dotenv').config();

const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        startHttpsServer(); // Start HTTPS server
        startHttpRedirect(); // Start HTTP to HTTPS redirect
        console.log('Server started successfully!');
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();
