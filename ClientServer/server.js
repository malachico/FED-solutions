const express = require('express');
const url = require('url');
const app = express();

app.use(express.static(__dirname));

// {item: price}
const catalog = {'cat': 10, 'dog': 15, 'tiger': 50, 'elephant': 80, 'shark': 120, 'dolphin': 110};

//{item: quantity}
let orders = {};

//{item: quantity}
let cart = {};


// GET
app.get('/api/catalog', (req, res) => res.send(catalog));
app.get('/api/cart', (req, res) => res.send(cart));
app.get('/api/orders', (req, res) => res.send(orders));

//POST
app.post('/api/cart', (req, res) => {
    const parsed = url.parse(req.url, true);
    console.log(parsed);

});




app.listen(3000, () => console.log('server listening on port 3000'));

module.exports = app;