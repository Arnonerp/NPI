const express = require('express');
const app = express();

const startHttpRedirect = () => {
    const HTTP_PORT = process.env.HTTP_PORT || 80; // Default to port 80 for HTTP
    app.use((req, res) => {
        const host = req.headers.host;
        const url = `https://${host}${req.url}`;
        res.redirect(url); // Redirect to HTTPS
    });

    app.listen(HTTP_PORT, () => {
        console.log(`HTTP Redirect Server running on port ${HTTP_PORT}`);
    });
};

module.exports = { startHttpRedirect };
