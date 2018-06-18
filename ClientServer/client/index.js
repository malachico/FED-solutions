const serverIP = 'localhost';
const serverPort = 3000;
const protocol = "http";
const url = protocol + "://" + serverIP + ":" + serverPort;


// Populate grid
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
            addToCart(key, products[key]);
        };

        // Append children
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productButton);
        catalog.appendChild(productDiv);

    }
};


function updateCart() {
    let cart = document.getElementById("cart");

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + "/api/cart", true);

    xhr.onload = function () {
        cart.innerHTML = xhr.responseText;
    };

    xhr.send(null);
}

function addToCart(product, price) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url + "/api/cart", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            updateCart();
        }
    };

    xhr.send("product="+product);
}

xhr.send(null);

