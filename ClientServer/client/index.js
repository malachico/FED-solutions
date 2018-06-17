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
        console.log(products[key]);
        // Product
        let productDiv = document.createElement("div");
        productDiv.classList.add("animal-box");

        // Description
        let productDescription = document.createElement("div");
        productDescription.classList.add("animal-description");
        productDescription.innerHTML = key;

        // Button
        let buttonNode = document.createElement("button");
        buttonNode.classList.add("box-button");
        buttonNode.innerText = products[key];

        // Append children
        productDiv.appendChild(productDescription);
        productDiv.appendChild(buttonNode);
        catalog.appendChild(productDiv);

    }
};

xhr.send(null);

