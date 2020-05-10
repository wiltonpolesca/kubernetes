const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World')
    res.end()
});

server.listen(process.env.PORT || 8013);
console.log(`Listening the port ${process.env.PORT || 8013}`);