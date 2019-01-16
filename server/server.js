const http = require('http');
// const https = require('https');
const config = require('../config');
const app = require('../src/app');

const httpServer = http.createServer(app);
// const httpsServer = http.createServer(app);
httpServer.listen(config.port.http);
// httpsServer.listen(config.port.https);
