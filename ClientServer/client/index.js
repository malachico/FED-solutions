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

    for(let key in products){
        console.log(products[key]);
        // Product
        let productDiv = document.createElement("div");
        productDiv.classList.add("animal-box");

        //description
        let productDescription = document.createElement("div");
        productDescription.classList.add("animal-description");

        // Button
        let buttonNode = document.createElement("BUTTON");
        buttonNode.classList.add("box-button");
        buttonNode.innerText = products[key];

        productDescription.innerHTML= key;

        productDiv.appendChild(productDescription);
        productDiv.appendChild(buttonNode);

        catalog.appendChild(productDiv);

    }
};

xhr.send(null);

