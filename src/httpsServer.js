const https = require('https');
const fs = require('fs');
const app = require('./app');

const startHttpsServer = () => {
    const HTTPS_PORT = process.env.HTTPS_PORT || 443;

    const httpsOptions = {
        key: fs.readFileSync(process.env.SSL_KEY_PATH),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    };

    https.createServer(httpsOptions, app).listen(HTTPS_PORT, () => {
        console.log(`HTTPS server is running on https://localhost:${HTTPS_PORT}`);
    });
};

module.exports = { startHttpsServer };
