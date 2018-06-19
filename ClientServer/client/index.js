function addEventListeners() {
    document.getElementById("checkout-button").addEventListener("click", checkout);
}

// Update components
window.onload = function () {
    getCatalog(updateCatalog);
    getCatalogImages(updateCatalogImages);
    getCart(updateCart);
    getOrders(updateOrders);
    addEventListeners();
};


function updateCatalog(products) {
    let catalog = document.getElementById("catalog");

    for (let key in products) {
        // Product
        let productDiv = document.createElement("div");
        productDiv.id = key;
        productDiv.classList.add("animal-box");

        // Picture
        let productPic = document.createElement("img");
        productPic.src = url + '/animals/' + key + ".png";

        // Button
        let productButton = document.createElement("button");
        productButton.classList.add("box-button");
        productButton.innerText = products[key];

        productButton.onclick = function () {
            addToCart(key);
        };

        // Append children
        productDiv.appendChild(productPic);
        productDiv.appendChild(productButton);
        catalog.appendChild(productDiv);
    }
}

function updateCatalogImages(images) {

}

function objToString(cartObj) {
    let content = '';

    for (let key in cartObj) {
        content += key + " : \t " + cartObj[key] + "<br>";
    }
    return content;
}

function updateCart(cartObj) {
    let shopList = document.getElementById("shop-list");

    shopList.innerHTML = objToString(cartObj);
}

function updateOrders(ordersObj) {

    let ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = '';

    for (let key in ordersObj) {
        let orderDiv = document.createElement("div");
        orderDiv.classList.add("tooltip");
        orderDiv.innerHTML = "order " + key;

        let tooltipText = document.createElement("span");
        tooltipText.classList.add("tooltiptext");
        tooltipText.innerHTML = objToString(ordersObj[key]);

        ordersList.appendChild(orderDiv);
        orderDiv.appendChild(tooltipText);
    }

}

