NPI Infrastructure Bring-Up
Table of Contents
Introduction
Technologies Used
Project Structure
Environment Setup
Step-by-Step Implementation
Introduction
The NPI project is a Node.js application with a RESTful API, using MongoDB as its database. This document describes the current project structure, dependencies, and setup instructions.

Technologies Used
Node.js: JavaScript runtime for backend development.
Express.js: Framework for building RESTful APIs.
MongoDB: NoSQL database for data storage.
Mongoose: ODM for MongoDB.
dotenv: For managing environment variables.
Project Structure
The project directory structure is organized as follows:

plaintext
Copy code
NPI/
├── src/
│   ├── controllers/       # Business logic
│   ├── models/            # Database schemas
│   ├── routes/            # API route definitions
│   ├── app.js             # Application setup
│   ├── db.js              # MongoDB connection logic
│   └── server.js          # Server startup
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in version control
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency lock file
└── README.md              # Project documentation
Environment Setup
Install Node.js and npm:

Verify installation:
bash
Copy code
node -v
npm -v
Install Git:

Verify installation:
bash
Copy code
git --version
Set up MongoDB Atlas:

Create a free cluster at MongoDB Atlas.
Generate a connection string and add it to the .env file.
Create .env File:

plaintext
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/NPI?retryWrites=true&w=majority
PORT=3000
Step-by-Step Implementation
1. Initialize the Project
Create the project directory:

bash
Copy code
mkdir NPI
cd NPI
Initialize a Node.js project:

bash
Copy code
npm init -y
2. Install Dependencies
Install the required dependencies:

bash
Copy code
npm install express mongoose dotenv
3. Set Up MongoDB
Create a database in MongoDB Atlas.
Use the connection string in the .env file.
4. Implement the Application
Database Schema (src/models/userModel.js)
javascript
Copy code
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
API Routes (src/routes/userRoutes.js)
javascript
Copy code
const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered', user });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
App Setup (src/app.js)
javascript
Copy code
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

module.exports = app;
MongoDB Connection (src/db.js)
javascript
Copy code
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
Server Startup (src/server.js)
javascript
Copy code
const app = require('./app');
const connectDB = require('./db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();