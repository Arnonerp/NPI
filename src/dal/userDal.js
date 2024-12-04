const User = require('../models/userModel');

async function findUserByEmail(email) {
    return await User.findOne({ email });
}

async function createUser(data) {
    const user = new User(data);
    return await user.save();
}

module.exports = { findUserByEmail, createUser };
