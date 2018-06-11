const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const fileStream = fs.createReadStream(filePath);

http.createServer(function callback(request, response) {
    fileStream.pipe(response);
}).listen(port);



