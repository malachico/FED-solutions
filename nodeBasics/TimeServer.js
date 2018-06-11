const net = require('net');

let now = new Date();
console.log(dateFormatter());


let port = process.argv[2];

const server = net.createServer(function (socket) {
    let t = dateFormatter();
    socket.write(t);
    socket.close();
});

server.listen(port);


function dateFormatter () {
    now = new Date();
    let year = "" + now.getFullYear();
    let month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    let day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    let hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    let minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute+"\n";
}

