// {item: price, ...}
const catalog = {'cat': 10, 'dog': 15, 'tiger': 50, 'elephant': 80, 'shark': 120, 'dolphin': 110};

// [{item: quantity}, ...]
let orders = [];

// {item: quantity, ...}
let cart = {};


// GET
function getCatalog() {
    return catalog;
}

function getCart() {
    return cart;
}

function getOrders() {
    return orders;
}


//POST
function addToCart(req) {
    let incoming = req.body;

    // Merge cart and incoming object
    for (let key in incoming) {
        if (!key in catalog) {
            res.send(false);
        }
        // if key already exists - update
        if (key in cart) {
            cart[key] += incoming[key];
        } else {
            // else - add it to cart
            cart[key] = incoming[key];
        }
    }

    return true;
}

// PUT
function checkout() {
    const clone = Object.assign({}, cart);
    orders.push(clone);
    cart = {};
    return true;
};


// Empty cart
module.exports.reset = function () {
    cart = {};
    orders = [];
};


module.exports = {
    getCatalog: getCatalog,
    getCart: getCart,
    getOrders: getOrders,
    addToCart: addToCart,
    checkout: checkout
};