const serverIP = 'localhost';
const port = 3000;

const url = 'http://' + serverIP + ":" + port;
let catalogXhr = new XMLHttpRequest();

catalogXhr.open('GET', url+"/api/catalog", true);
catalogXhr.responseType= 'json';



function getCatalog() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("TEST!");
        }
    };
    xhttp.open("GET", url+"/api/catalog", true);
    xhttp.send();
}
getCatalog();