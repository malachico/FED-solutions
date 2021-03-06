const http = require('http');
const url = require('url');

const port = process.argv[2];

function handleParseTime(time) {
    return JSON.stringify({
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    });
}

function handleUnixTime(time) {
    return JSON.stringify({"unixtime": time.getTime()});
}

function handleQuery(url) {

    const path = url.pathname;
    const time = new Date(url.query.iso);

    switch (path) {
        case ("/api/unixtime"):
            return handleUnixTime(time);
        case("/api/parsetime"):
            return handleParseTime(time);
        default:
            console.log("unsupported method");
    }
}

http.createServer(function callback(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    const parsed = url.parse(request.url, true);
    response.end(handleQuery(parsed));

}).listen(port);
