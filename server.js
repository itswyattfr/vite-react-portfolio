import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';

const app = express();

// SSL certificate options
const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('server.crt')
};

// Serve static files from the 'dist' folder (Vite build output)
app.use(express.static(path.resolve('dist')));

// Redirect HTTP to HTTPS (optional but recommended)
app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    }
    res.redirect(`https://${req.headers.host}${req.url}`);
});

// Start the server
https.createServer(options, app).listen(8888, () => {
    console.log('Server running on https://localhost:8888');
});
