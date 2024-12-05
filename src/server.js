const { startHttpsServer } = require('./httpsServer');
const { startHttpRedirect } = require('./httpRedirect');
const { connectDB } = require('./db');
require('dotenv').config();

const startServer = async () => {
    try {
        // Step 1: Connect to the database
        await connectDB();

        // Step 2: Start the HTTPS server
        startHttpsServer();

        // Step 3: Start the HTTP-to-HTTPS redirect server
        startHttpRedirect();

        console.log('Server started successfully!');
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();
