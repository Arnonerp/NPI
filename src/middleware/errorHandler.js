const Logger = require('../utils/logger');

async function errorHandler(err, req, res, next) {
    Logger.error('Unhandled error', { message: err.message, stack: err.stack });
    res.status(500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;
