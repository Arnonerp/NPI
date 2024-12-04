
# NPI Infrastructure Bring-Up

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Environment Setup](#environment-setup)
5. [How to Run the Project](#how-to-run-the-project)
6. [Implemented Features](#implemented-features)

---

## Introduction
The **NPI** project is a Node.js application with a RESTful API for managing user data. It uses MongoDB for data storage and follows a modular project structure.

---

## Technologies Used
- **Node.js**: Backend JavaScript runtime.
- **Express.js**: Web framework for APIs.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Environment variable management.

---

## Project Structure
```
NPI/
├── src/
│   ├── controllers/       # Business logic
│   ├── models/            # Database schemas
│   ├── routes/            # API route definitions
│   ├── app.js             # Application setup
│   ├── db.js              # MongoDB connection
│   └── server.js          # Server startup
├── .env                   # Environment variables
├── .gitignore             # Ignored files
├── package.json           # Project metadata
├── package-lock.json      # Dependency lock file
└── README.md              # Documentation
```

---

## Environment Setup
Follow these steps to set up the project:

1. **Install Node.js and npm**:
```bash
node -v
npm -v
```

2. **Install Git**:
```bash
git --version
```

3. **Set Up MongoDB Atlas**:
- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Generate a connection string and add it to the `.env` file.

4. **Create `.env` File**:
```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/NPI?retryWrites=true&w=majority
PORT=3000
```

---

## How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/NPI.git
cd NPI
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
node src/server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

---

## Implemented Features

1. **User Management**:
   - `POST /api/users/register`: Register a new user.
   - `GET /api/users`: Retrieve all users.

2. **Database Integration**:
   - MongoDB connected via Mongoose.

---
