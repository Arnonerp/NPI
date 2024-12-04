const Log = require('../models/loggerModel');

class Logger {
    static async log(level, message, meta = {}) {
        const timestamp = new Date().toLocaleString(); // Human-readable format
        try {
            const logEntry = new Log({ level, message, meta, timestamp });
            await logEntry.save();
        } catch (err) {
            console.error('Failed to save log:', err.message);
        }
    }

    static async info(message, meta = {}) {
        await this.log('INFO', message, meta);
    }

    static async error(message, meta = {}) {
        await this.log('ERROR', message, meta);
    }
}

module.exports = Logger;
