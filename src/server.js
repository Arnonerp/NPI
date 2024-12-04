const app = require('./app');
const connectDB = require('./db');
const Logger = require('./utils/logger');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB(); // Wait for the database connection
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
    }
};

startServer();
