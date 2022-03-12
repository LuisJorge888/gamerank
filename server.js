const app = require('./app');
const http = require('http');

const PORT = process.env.PORT || '3000';

const server = http.createServer(app);

console.log(PORT)
app.set('port', PORT);
server.listen(PORT);