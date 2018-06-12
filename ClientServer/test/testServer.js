//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
// Test the /GET route
describe('/GET catalog', () => {
    it('it should GET catalog', (done) => {
        chai.request(server).get('/api/catalog').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.be.eql({
                "cat": 10,
                "dog": 15,
                "dolphin": 110,
                "elephant": 80,
                "shark": 120,
                "tiger": 50
            });
            done();
        });
    });
});

// Get empty orders at first
describe('/GET orders', () => {
    it('it should GET orders', (done) => {
        chai.request(server).get('/api/orders').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            expect(res.body).to.be.empty;
            done();
        });
    });
});


// Get empty cart at first
describe('/GET cart', () => {
    it('it should GET cart', (done) => {
        chai.request(server).get('/api/cart').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            expect(res.body).to.be.empty;
            done();
        });
    });
});

// Add item to cart
describe('/POST cart', () => {
    it('it should POST item to cart', (done) => {
        chai.request(server).post('/api/cart').send("dolphin").end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

// Cart now should have 1 dolphin
describe('/GET cart', () => {
    it('it should GET cart', (done) => {
        chai.request(server).get('/api/cart').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.length.should.be.eql({'dolphin': 1});
            done();
        });
    });
});

describe('/PUT checkout', () => {
    it('it should PUT items from cart to orders', (done) => {
        chai.request(server).put('/api/checkout').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.length.should.be.eql({'dolphin': 1});
            done();
        });
    });
});

// Assert cart is  empty
describe('/GET cart', () => {
    it('it should GET cart', (done) => {
        chai.request(server).get('/api/cart').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.length.should.be.eql(0);
            done();
        });
    });
});

// Assert item was moved from cart to orders
describe('/GET orders', () => {
    it('it should GET orders', (done) => {
        chai.request(server).get('/api/orders').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.length.should.be.eql({'dolphin': 1});
            done();
        });
    });
});
