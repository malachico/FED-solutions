const serverIP = 'localhost';
const serverPort = 3000;
const protocol = "http";
const url = protocol + "://" + serverIP + ":" + serverPort;

function getCatalog(callback) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/catalog", true);

    xhr.onload = function () {
        let products = JSON.parse(xhr.responseText);
        callback(products);
    };

    xhr.send(null);
}


function getCart(callback) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/cart", true);

    xhr.onload = function () {
        let cartObj = JSON.parse(xhr.responseText);
        updateCart(cartObj);
    };

    xhr.send(null);
}


function addToCart(product) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url + "/api/cart", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            getCart();
        }
    };

    xhr.send("product=" + product);
}


function getOrders(callback) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/orders", true);

    xhr.onload = function () {

        let ordersObj = JSON.parse(xhr.responseText);
        callback(ordersObj)
    };

    xhr.send(null);
}


function checkout() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url + "/api/checkout", true);

    xhr.onload = function () {
        console.log(xhr.responseText);
        let ordersObj = JSON.parse(xhr.responseText);
        updateOrders(ordersObj)
    };
    xhr.send("");
}


