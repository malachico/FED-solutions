const express = require('express');
const url = require('url');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());       // to support JSON-encoded bodies

// {item: price, ...}
const catalog = {'cat': 10, 'dog': 15, 'tiger': 50, 'elephant': 80, 'shark': 120, 'dolphin': 110};

// [{item: quantity}, ...]
let orders = [];

// {item: quantity, ...}
let cart = {};


// GET
app.get('/api/catalog', (req, res) => res.send(catalog));

app.get('/api/cart', (req, res) => res.send(cart));

app.get('/api/orders', (req, res) => res.send(orders));

//POST
app.post('/api/cart', (req, res) => {
    try {
        let incoming = req.body;
        // Merge cart and incoming object
        for (let key in incoming) {
            // if key already exists - update
            if (key in cart) {
                cart[key] += incoming[key];
            }
            // else - add it to cart
            cart[key] = incoming[key];
        }
        res.send(true);
    } catch (e) {
        debug.error(e.toString());
        res.send(false);
    }
});

// PUT
app.put('/api/checkout', (req, res) => {
    const clone = Object.assign({}, cart);
    orders.push(clone);
    cart = {};
    res.send(true);
});


app.listen(3000, () => console.log('server listening on port 3000'));

module.exports = app;