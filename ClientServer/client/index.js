const serverIP = 'localhost';
const serverPort = 3000;
const protocol = "http";
const url = protocol + "://" + serverIP + ":" + serverPort;


// populate cart
window.onload =function () {
    populateGrid();
    updateCart();

    // todo: update orders
};



function populateGrid () {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/catalog", true);

    xhr.onload = function () {
        let catalog = document.getElementById("catalog");
        let products = JSON.parse(xhr.responseText);

        for (let key in products) {
            // Product
            let productDiv = document.createElement("div");
            productDiv.classList.add("animal-box");

            // Description
            let productDescription = document.createElement("div");
            productDescription.classList.add("animal-description");
            productDescription.innerHTML = key;

            // Button
            let productButton = document.createElement("button");
            productButton.classList.add("box-button");
            productButton.innerText = products[key];

            productButton.onclick = function () {
                addToCart(key);
            };

            // Append children
            productDiv.appendChild(productDescription);
            productDiv.appendChild(productButton);
            catalog.appendChild(productDiv);

        }
    };
    xhr.send(null);

}


function updateCart() {
    let shopList = document.getElementById("shop-list");

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/cart", true);

    xhr.onload = function () {
        let content = '';

        let cartObj = JSON.parse(xhr.responseText);

        for (let key in cartObj) {
            content += key + " : \t " + cartObj[key] + "<br>";
        }

        shopList.innerHTML = content;


    };

    xhr.send(null);
}

function addToCart(product) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url + "/api/cart", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            updateCart();
        }
    };

    xhr.send("product=" + product);
}

function updateOrders (){
    let ordersList = document.getElementById("orders-list");

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/orders", true);

    xhr.onload = function () {

        let ordersObj = JSON.parse(xhr.responseText);

        for (let key in ordersObj) {
            let orderDiv = document.createElement("div");
            orderDiv.classList.add("tooltip");

            let tooltip = document.createElement("span");
            tooltip.innerHTML = ordersObj[key];

            orderDiv.appendChild(orderDiv);
            orderDiv.appendChild(tooltip);
        }
    };

    xhr.send(null);

}


function checkout(){
    // send checkout to server

    //update cart

    // update orders
}
