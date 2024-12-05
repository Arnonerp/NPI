const https = require('https');
const fs = require('fs');
const app = require('./app'); // Import your Express app instance

const startHttpsServer = () => {
    const PORT = process.env.PORT; // Render's dynamic port
    if (!PORT) {
        throw new Error('Environment variable PORT is not set');
    }

    const httpsOptions = {
        key: fs.readFileSync(process.env.SSL_KEY_PATH),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    };

    https.createServer(httpsOptions, app).listen(PORT, () => {
        console.log(`HTTPS Server is running on port ${PORT}`);
    });
};

module.exports = { startHttpsServer };
