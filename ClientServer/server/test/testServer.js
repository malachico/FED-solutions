//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../controller');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);


// Test the get catalog
describe('/GET catalog', () => {
    it('it should GET catalog', (done) => {
        chai.request(server).get('/api/catalog').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.be.eql({
                "apatosaurus": 750000,
                "boar": 70000,
                "camel": 3500,
                "chameleon": 10,
                "cheetah": 50000,
                "chimera": 600000,
                "dragon": 1000000,
                "electric_knifefish": 40000,
                "elephant": 80000,
                "panda": 110000,
                "rhino": 120000,
                "whale": 10000,
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
            chai.request(server).post('/api/cart').send({"product": "panda"}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 1 panda
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'panda': 1});
                done();
            });
        });
    });

    // Commit checkout
    describe('/PUT checkout', () => {
        it('it should PUT items from cart to orders', (done) => {
            chai.request(server).post('/api/checkout').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.eql([{'panda': 1, 'total': 110000}]);
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
                res.body[0].should.be.eql({'panda': 1, 'total': 110000});
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
            chai.request(server).post('/api/cart').send({"product": "panda"}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 1 panda
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'panda': 1});
                done();
            });
        });
    });

    // Add same item to cart
    describe('/POST cart', () => {
        it('it should POST item to cart', (done) => {
            chai.request(server).post('/api/cart').send({"product": "panda"}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 2 pandas
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'panda': 2});
                done();
            });
        });
    });

});


describe('add distinct items to cart', () => {
    // Cart now should contain 2 pandas
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'panda': 2});
                done();
            });
        });
    });

    // Add same item to cart
    describe('/POST cart', () => {
        it('it should POST item to cart', (done) => {
            chai.request(server).post('/api/cart').send({"product": "tiger"}).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    // Cart now should contain 2 pandas
    describe('/GET cart', () => {
        it('it should GET cart', (done) => {
            chai.request(server).get('/api/cart').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.be.eql({'panda': 2, 'tiger': 1});
                done();
            });
        });
    });

});