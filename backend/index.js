const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My Page</title></head><body>Hello, world!</body></html')
    res.end();
});

const port = 5000;

server.listen(port);

