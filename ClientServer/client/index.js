function addEventListeners() {
    document.getElementById("checkout-button").addEventListener("click", checkout);
}

// Update components
window.onload =function () {
    getCatalog(updateCatalog);
    getCart(updateCart);
    getOrders(updateOrders);
    addEventListeners();
};



function updateCatalog (products) {
    let catalog = document.getElementById("catalog");

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
}

function objToString(cartObj) {
    let content = '';

    for (let key in cartObj) {
        content += key + " : \t " + cartObj[key] + "<br>";
    }
    return content;
}

function updateCart(cartObj){
    let shopList = document.getElementById("shop-list");

    let content = objToString(cartObj);

    shopList.innerHTML = content;
}

function updateOrders (ordersObj){

    let ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = '';

    for (let key in ordersObj) {
        let orderDiv = document.createElement("div");
        orderDiv.classList.add("tooltip");
        orderDiv.innerHTML = "order "+ key;

        let tooltipText = document.createElement("span");
        tooltipText.classList.add("tooltiptext");
        tooltipText.innerHTML = objToString(ordersObj[key]);


        ordersList.appendChild(orderDiv);
        orderDiv.appendChild(tooltipText);
    }

}

