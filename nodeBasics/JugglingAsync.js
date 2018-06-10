const http = require('http');

const urls = process.argv.slice(2);

let counter = 0;
let contents = {};

for (let i = 0; i < urls.length; i++) {
    contents[urls[i]] = "";
}

urls.map(x => getContetnt(x));

function getContetnt(url) {
    http.get(url, function (response) {

        response.setEncoding("utf8");

        response.on("data", (data) => {
            contents[url] += data;
        });
        response.on("end", () =>
        {
            counter++;
            if (counter === 3){
                for(let key in contents){
                    console.log(contents[key]);
                }
            }
        });
    });
}
