const http = require ('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

const port = 3001;
server.listen (port, () => {
    console.log('server running at http://localhost:${port}/');
});
