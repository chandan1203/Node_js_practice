
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1/>This is header tag ..Home<h1>');
        res.end();
    }
  });
  
  server.listen(3000);
