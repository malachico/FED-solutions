const serverIP = 'localhost';
const serverPort = 3000;
const protocol = "http";
const url = protocol + "://"+serverIP +":"+serverPort+"/api/catalog";

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function () {
    console.log(xhr.responseText); // http://example.com/test
};
xhr.send(null);


