const mongoose = require('mongoose');
const Logger = require('./utils/logger'); // Optional if logging is used here
require('dotenv').config();


const connectDB = async () => {
    try {
console.log('MongoDB URI:', process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
