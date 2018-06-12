//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
/*
  * Test the /GET route
  */
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
