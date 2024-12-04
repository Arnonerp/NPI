const Log = require('../models/loggerModel');

class Logger {
    static async info(message, meta = {}) {
        try {
            await Logger.log('INFO', message, meta);
        } catch (err) {
            console.error('Failed to save log:', err.message);
        }
    }

    static async warn(message, meta = {}) {
        try {
            await Logger.log('WARN', message, meta);
        } catch (err) {
            console.error('Failed to save log:', err.message);
        }
    }

    static async error(message, meta = {}) {
        try {
            await Logger.log('ERROR', message, meta);
        } catch (err) {
            console.error('Failed to save log:', err.message);
        }
    }

    static async log(level, message, meta) {
        try {
            const logEntry = new Log({ level, message, meta });
            await logEntry.save();
        } catch (err) {
            console.error('Failed to save log:', err.message);
        }
    }
}

module.exports = Logger;
