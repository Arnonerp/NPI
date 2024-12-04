const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    level: { type: String, required: true },
    message: { type: String, required: true },
    meta: { type: Object, required: false },
    timestamp: { type: String, required: true }, // Store timestamp as a human-readable string
});

module.exports = mongoose.model('Log', logSchema);
