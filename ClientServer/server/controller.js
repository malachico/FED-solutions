const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('./server.js');

app.use(express.static(__dirname));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded body

let options = {
    index: "index.html"
};

app.use('/', express.static('../client/', options));

app.use(express.static(__dirname + '/animals'));

app.get('/api/catalog', (req, res) => res.send(server.getCatalog()));

app.get('/api/cart', (req, res) => res.send(server.getCart()));

app.get('/api/orders', (req, res) => res.send(server.getOrders()));

app.post('/api/cart', (req, res) => res.send(server.addToCart(req)));

app.post('/api/checkout', (req, res) => res.send(server.checkout()));

app.listen(3000, () => console.log('server listening on port 3000'));

module.exports = app;
