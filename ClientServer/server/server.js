// {item: price, ...}
const catalog =
    {
        'chameleon':10, 'apatosaurus': 750000, 'cheetah': 50000,
        'elephant': 80000, 'rhino': 120000, 'panda': 110000,
        'whale': 10000, 'camel': 3500, 'dragon': 1000000,
        'boar': 70000, 'chimera': 600000, 'electric_knifefish': 40000
    };

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
        let product = incoming[key];
        if (!product in catalog) {
            res.send(false);
        }
        // if product already exists - update
        if (product in cart) {
            cart[product] += 1;
        } else {
            // else - add it to cart
            cart[product] = 1;
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
}

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