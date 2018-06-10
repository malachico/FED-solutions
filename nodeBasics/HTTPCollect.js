const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding("utf8");

    let content = "";
    response.on("data", (data) => {
        content += data;
    });

    response.on("end", () => {
        console.log(content.length);
        console.log(content);
    })
});
