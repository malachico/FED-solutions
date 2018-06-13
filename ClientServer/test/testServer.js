//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../controller');
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

describe('simple usage', () => {
    // Get empty orders at first
    describe('/GET orders', () => {
        it('it should GET orders', (done) => {
            chai.request(server).get('/api/orders').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
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
            chai.request(server).post('/api/cart').send({"dolphin": 1}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 1 dolphin
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'dolphin': 1});
                done();
            });
        });
    });

    // Commit checkout
    describe('/PUT checkout', () => {
        it('it should PUT items from cart to orders', (done) => {
            chai.request(server).put('/api/checkout').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.true;
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
                expect(res.body).to.be.eql({});
                done();
            });
        });
    });

    // Assert item was moved from cart to orders
    describe('/GET orders', () => {
        it('it should GET orders', (done) => {
            chai.request(server).get('/api/orders').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.be.eql({'dolphin': 1});
                done();
            });
        });
    });
});

describe('add same item to cart', () => {

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
            chai.request(server).post('/api/cart').send({"dolphin": 1}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 1 dolphin
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'dolphin': 1});
                done();
            });
        });
    });

    // Add same item to cart
    describe('/POST cart', () => {
        it('it should POST item to cart', (done) => {
            chai.request(server).post('/api/cart').send({"dolphin": 1}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 2 dolphins
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'dolphin': 2});
                done();
            });
        });
    });

});


describe('add distinct items to cart', () => {
    // Cart now should contain 2 dolphins
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'dolphin': 2});
                done();
            });
        });
    });

    // Add same item to cart
    describe('/POST cart', () => {
        it('it should POST item to cart', (done) => {
            chai.request(server).post('/api/cart').send({"tiger": 1}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 2 dolphins
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'dolphin': 2, 'tiger': 1});
                done();
            });
        });
    });

});