// {item: price, ...}
const catalog =
    {
        'chameleon': 10, 'apatosaurus': 750000, 'cheetah': 50000,
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

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function calcTotal(clone) {
    let toCalc = Object.assign({}, cart);

    Object.keys(toCalc).map(function (key, index) {
        let qty = toCalc[key];
        toCalc[key] = qty * catalog[key];
    });

    return Object.values(toCalc).reduce((a, b) => a + b);
}

// PUT
function checkout() {
    if (!isEmpty(cart)) {
        let clone = Object.assign({}, cart);
        let total = calcTotal(clone);
        clone['total'] = total;
        orders.push(clone);
        cart = {};
    }
    return orders;
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