const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is the buggy part. The server may crash if there is an unhandled exception
//in the request handler.

//Example of an unhandled exception:

//server.on('request', (req, res) => {
//  throw new Error('Unhandled exception');
//});