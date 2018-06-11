const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

http.createServer(function callback(request, response) {

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);

}).listen(port);



