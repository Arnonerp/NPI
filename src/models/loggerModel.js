const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    level: { type: String, required: true, enum: ['INFO', 'WARN', 'ERROR'] },
    message: { type: String, required: true },
    meta: { type: Object, default: {} }, // Additional metadata
    timestamp: { type: Date, default: Date.now }, // Log timestamp
});

module.exports = mongoose.model('Log', logSchema);
