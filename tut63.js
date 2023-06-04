const http = require('http');//mtlb ki hum http module ko use krna chahte hain

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');//html page-> text/html
  res.end('Hello Vaish!!');//html bhi aa jayegi , but must be enclosed in `...`
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});