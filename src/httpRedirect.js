const http = require('http');

const startHttpRedirect = () => {
    const HTTP_PORT = process.env.HTTP_PORT || 80;
    const HTTPS_PORT = process.env.HTTPS_PORT || 443;

    http.createServer((req, res) => {
        const host = req.headers.host.split(':')[0];
        const redirectUrl = `https://${host}:${HTTPS_PORT}${req.url}`;
        res.writeHead(301, { Location: redirectUrl });
        res.end();
    }).listen(HTTP_PORT, () => {
        console.log(`HTTP redirect server running on port ${HTTP_PORT}`);
    });
};

module.exports = { startHttpRedirect };
