const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Example Route
app.get('/', (req, res) => {
    res.send('Welcome to NPI!');
});

// Step 7.3: Add user route
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
app.use('/api/users', userRoutes); // Use the userRoutes for `/api/users` endpoint

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
